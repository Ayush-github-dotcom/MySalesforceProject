trigger UpdatePriceOnConcert on Concert__c (before insert, before update) {
    for (Concert__c con : Trigger.new) {
        if (con.No_of_Tickets_Remaining__c != null && con.No_of_Tickets_Available__c != null) {
            if (con.No_of_Tickets_Remaining__c < (0.1 * con.No_of_Tickets_Available__c)) {
                if (con.Price__c != null) {
                    con.Price__c = con.Price__c * 1.1;
                    System.debug('Updated Price = ' + con.Price__c);
                }
            }
        }
    }
}
