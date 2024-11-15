
# Salesforce Ticket Booking System


https://github.com/user-attachments/assets/5f9a172f-e818-4886-a4e3-5749812f9f83


## Overview
This project is a **Salesforce ticket booking system** that enables users to book tickets for concerts, with dynamic ticket availability tracking and customer satisfaction feedback. The system utilizes custom objects such as **Concert**, **Ticket**, and **Individual**. This README will guide you on how to deploy the project to your Salesforce Org, configure custom objects, and test the application.

And This project is a Salesforce Ticket Booking System designed to streamline the booking process for concert events while maintaining robust data integrity and customer satisfaction tracking. The application uses Salesforce's custom objects and declarative tools to manage event details, ticket availability, and feedback for each booking. The system includes:

- **Concert Management**: Users can create detailed concert records with fields such as venue, concert type, event date, ticket availability, and pricing.
- **Dynamic Ticket Tracking**: The ticket booking system updates ticket availability automatically when tickets are booked or canceled, ensuring real-time data accuracy.
- **Customer Feedback Tracking**: The Individual object is used to collect customer feedback post-concert, track dissatisfaction ratings, and monitor how much customers paid, allowing for detailed insights into customer satisfaction.
- **Master-Detail Relationship**: Data consistency is ensured with master-detail relationships between Concert and Ticket objects, enabling the system to update ticket counts and maintain clean, integrated records for each concert and attendee.

## Key Features
- **Concert Management**: Create and manage concerts with details like venue, type, date, and ticket availability.
- **Ticket Booking**: Track ticket bookings for each concert and reduce available tickets as bookings are made.
- **Customer Feedback**: Gather customer feedback through the **Individual** object, tracking satisfaction and price paid.
- **Master-Detail Relationship**: Establish a master-detail relationship between **Concert** and **Ticket** objects for data integrity.
- **Real-Time Availability Updates**: As bookings occur, available ticket counts decrease, ensuring accurate records.
- **Feedback Collection**: Enables the tracking of customer satisfaction ratings and feedback for each booking.
- **Error Prevention with Master-Detail Relationships**: Master-detail relationships between concert and ticket records maintain data integrity, preventing data orphaning.
- **Customizable Fields**: Admins can customize fields, reports, and views to suit their operational needs, allowing for adaptable data management and visibility.
- **Accurate Availability**: Real-time updates ensure that ticket counts reflect current availability.
- **Customizable Fields and Reports**: The system is designed to allow admin customization for reports, fields, and data views as needed.
- **Advanced Feedback**: Feedback mechanisms enable detailed tracking of customer satisfaction for improved service insights.

---

## Salesforce Org Configuration
Ensure that the following custom objects and fields are created in your Salesforce Org:

### **Concert Object**
Fields:
- Concert Type
- Concert Venue
- Date of Concert
- No. of Tickets Available
- No. of Tickets Remaining
- Price

### **Individual Object**
Fields:
- Customer Dissatisfaction
- Price Paid
- Waiting List

### **Ticket Object**
Fields:
- Ticket No.
- Concert (Master-Detail Relationship)
- Individual (Master-Detail Relationship)
- Price (Formula Field)

---

## How to Deploy the Project

### 1. Authenticate Salesforce Org
- If you haven’t authenticated yet, use Salesforce CLI to log in:
- Copy code  : sfdx force:auth:web:login -a ayushticketbooking@gmail.com

### 2. Deploy the Project
   -  Use the following Salesforce CLI command to deploy your project to the Salesforce Org:
    - Copy code  : sfdx force:source:deploy -p path/to/your/project -u ayushticketbooking@gmail.com


  ###  Replace:
         -  path/to/your/project with the actual path where your Salesforce project is located.
        - <your-org-alias> with your authenticated Salesforce org alias.

   

## Data Import and Lookup Field Update
  - To populate the Lookup field and work with existing records:

1. Export Existing Records
Export the data from relevant objects (Concert, Ticket, and Individual) using Salesforce Data Loader or the Data Import Wizard.

2. Update the Lookup Field
In the CSV file, update the Lookup field with the appropriate related record IDs. These IDs link the Ticket and Individual objects to Concert.

3. Import Data
Use Salesforce Data Loader or Data Import Wizard to import the updated data back into Salesforce.  




## Testing the Application
- Once the deployment and data import are complete, perform the following tests:

1. Create Concert Records
Add records for concerts in Salesforce using the Concert custom object.

2. Book Tickets
Create ticket records for the concerts and ensure the ticket availability reduces as bookings are made.

3. Data Consistency
Verify that the system updates the available tickets correctly as bookings happen.



## Future Improvements

- Payment Gateway Integration
    Implement a payment gateway to process real transactions during ticket bookings.

- Advanced Reporting
    Build custom reports and dashboards to track concert performance, ticket sales, and customer feedback.

- Notifications
    Implement email or SMS notifications for ticket booking confirmations and reminders.

- Admin Features
    Add functionality to allow admins to modify the available tickets dynamically based on demand.

  

## Permissions and Access
 - Ensure that the necessary user profiles have the required permissions to access the custom objects and fields. Set up sharing rules and permissions as required.

## License
This project is licensed under the MIT License.

## Contact
- For any issues or contributions, feel free to open an issue or contact the project maintainer.

## Resources
- [Salesforce Extensions Documentation](https://developer.salesforce.com/tools/vscode/)
- [Salesforce CLI Setup Guide](https://developer.salesforce.com/docs/atlas.en-us.sfdx_setup.meta/sfdx_setup/sfdx_setup_intro.htm)
- [Salesforce DX Developer Guide](https://developer.salesforce.com/docs/atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_intro.htm)
- [Salesforce CLI Command Reference](https://developer.salesforce.com/docs/atlas.en-us.sfdx_cli_reference.meta/sfdx_cli_reference/cli_reference.htm)

  ## Conclusion
- This README provides an overview of setting up, deploying, and testing your Salesforce Ticket Booking System. For detailed help on specific tasks, refer to the provided links or feel free to open issues if you face any problems.









