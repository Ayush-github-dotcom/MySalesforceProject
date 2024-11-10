import { LightningElement } from 'lwc';
import getPrice from '@salesforce/apex/TicketBooking.getPrice';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';

export default class TicketBookingComponent extends LightningElement {
    showPrice;
    error;

    handleSuccess(event) {
        const evt = new ShowToastEvent({
            title: 'Success',
            message: 'Ticket Booked',
            variant: 'success'
        });
        this.dispatchEvent(evt);
    }

    handleChange(event) {
        let targetId = event.target.value;
        
        if (targetId) { // Check if targetId is valid
            getPrice({ recordId: targetId })
                .then((data) => {
                    this.showPrice = data; // Store price in showPrice
                    this.dispatchEvent(
                        new ShowToastEvent({
                            title: 'Price Updated',
                            message: 'Concert Price Updated',
                            variant: 'success'
                        })
                    );
                })
                .catch((error) => {
                    this.error = error;
                    this.dispatchEvent(
                        new ShowToastEvent({
                            title: 'Error',
                            message: this.error.body.message,
                            variant: 'error'
                        })
                    );
                });
        }
    }
}
