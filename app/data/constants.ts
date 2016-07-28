export class Constants {

    //================================================ EQ CALLS===================================================
    detailsUrl: string = "http://10.2.16.71:8080/CarmanahRest/parser/getDetailsIndividual";
    deviceFromTiltUrl: string = " http://10.2.16.71:8080/CarmanahRest/parser/getDeviceListFromTilt?tilt=";
    deviceFromProfileUrl: string = "http://10.2.16.71:8080/CarmanahRest/parser/getDeviceListFromProfile?profile=";
    deviceFromFixtureUrl: string = "http://10.2.16.71:8080/CarmanahRest/parser/getDeviceListFromFixture?fixture=";
    sustainableDeviceUrl: string = "http://10.2.16.71:8080/CarmanahRest/parser/getSustainableProductsOutdoor?inputJSON=";
    opticsFromFixtureUrl: string = "http://10.2.16.71:8080/CarmanahRest/parser/getOpticsFromFixture?fixture=";
    optionsUrl: string = "http://10.2.16.71:8080/CarmanahRest/parser/getKeysWithSubmittalPackage?inputJSON=";
    getOptionsDetailUrl: string = "http://10.2.16.71:8080/CarmanahRest/parser/getOptionsDetail?deviceName=";
    getLocationNameUrl = "http://maps.googleapis.com/maps/api/geocode/json?latlng=";
    getLatLngUrl = "https://maps.googleapis.com/maps/api/geocode/json?address=";
    getFullPriceUrl = "http://10.2.16.71:8080/CarmanahRest/parser/getFullPrice?inputJSON=";
    //================================================ MISC VARIABLES ============================================

    noSustainableDeviceFoundMessage: string = "Sorry, we can't find any sustainable device at your location. Kindly review the location.";
}