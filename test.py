import cv2
import numpy as np
from keras_retinanet import models
from keras_retinanet.utils.image import read_image_bgr, preprocess_image, resize_image
from keras_retinanet.utils.visualization import draw_box, draw_caption

# Load RetinaNet model
model_path = './model/resnet50_coco_best_v2.1.0.h5'  # Replace with the path to your downloaded model
model = models.load_model(model_path, backbone_name='resnet50')

# Load and preprocess the input image
image_path = './input images/1.jpg'  # Replace with the path to your input image
image = read_image_bgr(image_path)
image = preprocess_image(image)
image, scale = resize_image(image)

# Make predictions
boxes, scores, labels = model.predict_on_batch(np.expand_dims(image, axis=0))

# Display the predictions on the image
for box, score, label in zip(boxes[0], scores[0], labels[0]):
    if score < 0.5:  # Adjust the threshold based on your needs
        break

    box = box.astype(int)
    draw_box(image, box, color=(0, 255, 0))
    draw_caption(image, box, f"Score: {score:.2f}")

# Display the result
cv2.imshow('RetinaNet Detection', image)
cv2.waitKey(0)
cv2.destroyAllWindows()
