public with sharing class TicketBooking {
    @AuraEnabled (cacheable=true)
    public static List<Concert__c> getConcerts(){
        return [select Id,
                    Name,
                    Date_of_Concert__c,
                    Price__c from Concert__c 
                    where Date_of_Concert__c > TODAY ORDER BY Date_of_Concert__c ASC];
                
   }
   @AuraEnabled (cacheable=true)
   public static Decimal getPrice(Id recordId) {
        System.debug('Inside method');
         Decimal concerts = [SELECT 
                             Id,
                            Name,
                            Date_of_Concert__c,
                            Price__c
                            FROM Concert__c 
                            WHERE ID = :recordId
                            ].Price__c;
                        
      return concerts;

    }
}


