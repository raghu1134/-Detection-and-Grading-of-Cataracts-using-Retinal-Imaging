# Detection-and-Grading-of-Cataracts-using-Retinal-Imaging
Cataract, which is the clouding of the crystalline lens. Cataract is one of the most prevalent causes of blindness in the industrialized world, accounting for more than 50% of blindness. Early detection and treatment can reduce the suffering of cataract patients and prevent visual impairment from turning into blindness. But the expertise of trained eye specialists is necessary for clinical cataract detection and grading, which may cause difficulties with everybody's early intervention due to the underlying costs. Retinal imaging is a non-invasive and widely available method for detecting cataracts. However, manual detection and grading of cataracts from retinal images is time-consuming and requires expertise. In this project we are going to use a deep learning-based system for cataract detection and grading using retinal images. Our system utilizes “RetinaNet”, a state-of-the-art object detection algorithm, and “ResNet”, a state-of-the-art image classification algorithm for cataract detection and classification of cataract severity of retinal images. We will train and evaluate our system on a dataset of retinal images. The dataset consists of images of a variety of patients with different types and severities of cataracts.

• The proposed system is a deep learning-based system for cataract detection and grading using retinal images.<br/>
• The system works as follows:<br/>
• Input: The system takes a retinal image as input.<br/>
• RetinaNet: RetinaNet is used to detect the presence and location of cataracts in the image.<br/>
• ResNet: ResNet is used to classify the severity of the cataracts.<br/>
• Output: The system outputs a classification of the patient's cataracts, such as “normal”, "mild", "moderate", or "severe".<br/>
•The system is trained on a dataset of retinal images from patients with different types and severities of cataracts. Once trained, the system can be used to detect and grade cataracts in new retinal images.Cataract, which is the clouding.<br/>


## First Install all the Frameworks from Req.txt file and make sure you system having Python 
```bash
pip install -r req.txt
```
Make sure you installed all the frameworks if its popping with errors then just look at the very last line to Understand what you need to install , just slide to any browser and search that framework and install.

### Run the main file using following command
```bash
python3 main.py
```
###          (OR)
```bash
python main.py
```


# User Workflow for the Application
**Access the Dashboard Screen:** Navigate to the dashboard screen of the application.<br/>

**Register as a New User:** Proceed to the signup form and register as a new user. Your registration details will be securely saved in the user_data.csv file.<br/>

**Login:** Return to the login page and use the registered credentials to log in.<br/>

**Navigate to Home Page:** After a successful login, you will be directed to the home page.<br/>

**Upload and Predict:**<br/>

Click the Choose File button to select an image file for processing.<br/>
After selecting the file, click the Upload and Predict buttons.<br/>
The system will process the image, and you will receive a popup with the prediction results as illustrated in the figure below.<br/>
![](https://i.imgur.com/mKIDPel.jpeg)
<br/>
Also you can check your user History by clicking Catract web from navbar as shown below, also it saves in your local machine in catract folder as reports.csv 
![](https://i.imgur.com/Ldoc0MM.jpeg)

This is how it works. Adios!
