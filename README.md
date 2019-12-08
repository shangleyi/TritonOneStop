![TOS Main](https://github.com/ouweifan/TritonOneStop/blob/master/TOSMAIN.jpg)

# Introduction
Triton OneStop is a website that aims to help newcomers to the UCSD community. The website provides guidance to useful resources, a list of upcoming events, and a course planner that estimates course loads for students. Students can customize their main page with their favourite resources so they can get easy access to the resources.


# Video Demo
* https://www.youtube.com/watch?v=cHzTWcyMiho&t=2s 
* If the Youtube link fails, use this one from Google Drive:
  * https://drive.google.com/file/d/1FoP42N9MrctUmn0_e1DFdrW9dVeAZR56/view 
* For the best experience, please turn on your audio 

# System Requirements
* Operating system: Windows 10
* Browser: Google Chrome
* Resolution: 1920*1080
* Screen Scaling: 100%

# Installation Instruction
* Triton OneStop is web-based, no need for installation

# How to Run
* Visit https://prod-deploy-1.firebaseapp.com/ using browser
* Perform test objects in Test Use Case

# TOS Login Credential
* Please refer to README of project

# Gmail Login Credentials
* Please refer to README of project

# Known Issues
* Whenever the user login and log out, the next time they log back in without refresh the page, system will generate a error message: 
  "TypeError: i.auth(...).currentUser is null".
  * Solution: 1. refresh the page before the second log in 
              2. When the error shows up, click "OK".
* In resource page, sometimes search dropdown menu doesn’t respond to user’s ‘click’ on option.
  * Solution: User shall manually input what they want to search instead of clicking on the dropdown menu.
* In CoursePlanner page, sometimes dropdown menu doesn’t load when the connection to firebase is lost.
  * Solution: contact tritononestop@gmail.com.
* In Event page, sometimes the events are out of date or no event appears. This is because Student Events Insider website is down.
  * Solution: contact getinvolved@ucsd.edu.
* In Main/Resource/CoursePlanner/Event page, sometimes the page is blank and no data gets loaded or sometimes users cannot login/signup/forgot password.
  * Solution: make sure the internet is connected.
* After the user SignUp, if the user clicks Login in the middle of auto login, a window of “TypeError: Cannot read property ‘uid’ of null” would pop up, because the database need some time to get the information.
  * Solution: wait for a few seconds or refresh the website. 
* Sometimes the Main Page’s button is not activated after user login. 
  * Solution: refresh the page. 

# Technical Support
* Jiawen Zeng - Project Manager
  * Phone: 510-386-1829
* Zijing Di - Algorithm Specialist
  * Phone: 858-228-7153
* Johnathan Huynh - Software Dev. Lead
  * Phone: 714-787-9132





# TritonOneStop_Frontend
installation guide for backend
1. install PyCharm using NetJetBeans account
2. try to run app.py
3. In PyCharm, Setting => Project Intepreter => choose python3.7 on the top => + => add required package
4. Dependencies: 
flask
firebase_admin
flask_cors
firebase
python_jwt
gcloud
sseclient
pycrypto
requests_toolbelt
