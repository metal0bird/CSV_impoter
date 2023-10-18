# CSV_impoter

Steps to implement this on your own system:

### Prerequisites
Before you begin, make sure you have the following:

A Google Sheets document where you want to import the CSV data.
Basic familiarity with HTML, JavaScript, and Google Apps Script.
Access to the Google Apps Script editor.

### Steps
#### Step 1: Set up your Google Sheets Document

Start by opening Google Sheets and create a new or use an existing spreadsheet where you want to import CSV data.

#### Step 2: Create a Google Apps Script

In your Google Sheets document, go to Extensions > Apps Script to open the Google Apps Script editor.

#### Step 3: Create Functions in Google Apps Script (.gs file)

Copy the codes into the (.gs) file for importing CSV data.

#### Step 4: Publish Your Google Apps Script

Publish your Google Apps Script as a web app to get a unique URL. Go to Publish > Deploy as web app. Set the access to "Anyone, even anonymous," and deploy the script. You'll receive a URL for your web app.

#### Step 5: Create an HTML Interface

Copy the HTML file codes into the .html file.

#### Step 8: Test Your Importer

Save your HTML file and open it in a web browser.

Step 1: Drag and Drop the CSV File

Locate a designated area (usually with instructions like "Drag & drop a CSV file here") on the HTML page.
Drag and drop the CSV file you want to import onto this area. The content of the CSV file will be read and processed.

Step 2: Select Columns for Import

In the HTML page, you may see a list of checkboxes corresponding to the columns in the CSV file.
Select the checkboxes that correspond to the columns you want to import.
Step 3: Specify Import Options

In the input fields, provide additional import options:
Choose which columns you want to add to the active Google sheet.
Choose whether you want to append data (add to existing data) or overwrite data (replace existing data) in the specified range.

Step 4: Initiate the Import

Once you've selected columns and configured the import options, click the "Import" button on the HTML page.

Step 5: Review the Result

The HTML page will display a message or notification regarding the status of the CSV import. Typically, it will indicate whether the import was successful or if there were any issues.

Step 6: Verify the Import in Google Sheets

Open your Google Sheets document and navigate to the specified sheet and range you provided in the import options.
Check to see if the imported data has been added or overwritten as per your selections.

Step 7: Troubleshoot, if Necessary

If you encounter any issues during the import, refer to any provided error messages or contact me for assistance.



