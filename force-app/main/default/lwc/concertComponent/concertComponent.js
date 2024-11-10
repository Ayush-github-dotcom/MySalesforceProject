import { LightningElement, wire, track } from 'lwc';
import getConcerts from '@salesforce/apex/TicketBooking.getConcerts';

export default class ConcertComponent extends LightningElement {
    concertList;

    @wire(getConcerts) wiredConcerts({ error, data }) {

        if (data) 
        {
            this.concertList = data;
            console.log(data);

        } else if (error)
             {
                 console.log(error);
             }
    }

    @track columns = [
        { label: 'Name', fieldName: 'Name' },
        { label: 'Price', fieldName: 'Price__c' },
        { label: 'Date of Concert ', fieldName: 'Date_of_Concert__c' },
    ];
}
