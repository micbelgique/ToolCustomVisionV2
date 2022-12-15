import * as tf from '@tensorflow/tfjs';
import { LayersModel } from '@tensorflow/tfjs';

export class CustomPrediction {

  private model: LayersModel;
  private labels;

  constructor(modelUrl: string, labels: string[]) {
    this.labels = labels;
    this.load(modelUrl);
  }

  async load(modelUrl) {
    this.model = await tf.loadLayersModel(modelUrl);
    console.log('Custom model loaded from : ' + modelUrl);
  }

  predict(input) {
    const tensor = this.preprocessImage(input);
    const prediction = this.model.predict(tensor.toFloat());
    return prediction;
  }


  // preprocess the image to be mobilenet friendly
  preprocessImage(image) {
    const pixels = tf.browser.fromPixels(image);
    pixels.expandDims(0);
    // resize the input image to mobilenet's target size of (224, 224)
    const smalImg = tf.image.resizeBilinear(pixels, [256, 256]);
    // const resized = tf.cast(smalImg, 'float32');
    const t4d = tf.tensor4d(smalImg.dataSync(), [1, 256, 256, 3]);
    return t4d;
  }

  getTopKClasses(logits, topK: number) {
    const predictions = tf.tidy(() => {
      return tf.softmax(logits);
    });

    const values = predictions.dataSync();
    predictions.dispose();

    let predictionList = [];
    for (let i = 0; i < values.length; i++) {
      predictionList.push({value: values[i], index: i});
    }
    predictionList = predictionList
                        .sort((a, b) => {
                          return b.value - a.value;
                        })
                        .slice(0, topK);

    return predictionList.map(x => {
      return {label: this.labels[x.index], value: x.value};
    });
  }

}
