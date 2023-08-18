Task Requirements: The technical stack for this task will comprise React.js and Redux. Utilize React.js as your core framework, with Redux as the recommended state management solutio n for facilitating component communication. 

 

Project Brief: This task involves the creation of a single-page application featuring an image file uploader, a preview section for uploaded images, and a table. Note, this task does not involve any backend communication. 

 

Functional Requirements: 

Image Uploader: It should accept only .jpg (jpeg) and .png file formats. 

Image Preview: Upon successful image upload, the preview section should automatically display the new image. Additionally, a dot will be displayed at the clicked position each time the user left-clicks on this section. All dots should be cleared each time a new image file is uploaded. 

Table: For each dot generated on the image preview, a new row will be added to the table displaying the dot id (beginning from 1), the column, and the dot's (x, y) coordinates (in pixels, relative to the preview section, not the entire window). Uploading a new image should clear all the rows in the table. 

 

User Experience (UX): The user journey will be as follows - Load a new image > Click on the preview image > Observe the dots on the preview section > View the corresponding dot information in the table > Load a new image… 

 

User Interface (UI): While there are no explicit requirements for the UI, we encourage the application of CSS for better aesthetics. Incorporation of UI libraries (for example, Semantic UI, Ant Design, Material UI, etc.) or UI structure tools (like grid layout, etc.) will be positively viewed as a bonus. 