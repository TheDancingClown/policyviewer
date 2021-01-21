const MockPolicy = {
  "policy": {
    "compulsory_excess":100,
    "voluntary_excess":100,
    "address": {
      "line_1":"Flat 1, 11 The Street",
      "line_2":"Little Hampton",
      "line_3":"Burton-on-the-water",
      "county":"Avon",
      "city":"Stroud",
      "country":"GB",
      "postcode":"W53TR"
    },
    "usage":"SDP",
    "cover":"Comprehensive",
    "auto_renew":true,
    "start_date":1599567165,
    "end_date":1599567165,
    "billing_day_date":20,
    "underwriter":"Zurich",
    "underwriter_ref":"AXABM000001",
    "product_name":"PBMYD",
    "policy_year":1,
    "created_at":1599567165,
    "policy_ref":"apple-orange-pear"
  },
  "proposer": {
    "title":"003",
    "first_names":"Dave",
    "last_names":"Jones",
    "email":"dave@jones.com",
    "mobile_number":"+447999000011",
    "children":1,
    "has_medical_conditions":true,
    "has_informed_dvla_medical_conditions":false,
    "ncd":1,
    "dob":"1980-12-31",
    "licence_type":"F",
    "employment":"E",
    "occupation":"51D",
    "business":"077",
    "licence_issued_date":"2000-12-31",
    "residency_date":"2000-12-31",
    "has_criminal_conviction":false,
    "convictions": [{
      "code":"AC10",
      "date":"2018-01-01",
      "points":3,"ban":0
    }],
    "claims": [{
      "code":"A",
      "date":"2016-01-01",
      "at_fault":false,
      "ncd_lost":false
    }]
  },
  "vehicle": {
    "reg":"WO123XX",
    "vin":"YV1UZ25UCK1337428",
    "type":"01",
    "make":"tesla",
    "model":"S",
    "colour":"black",
    "group_rating_50":21,
    "group_rating_20":10,
    "abi_code":"01001000",
    "engine":1650,
    "fuel":"001",
    "owner":"1",
    "keeper":"1",
    "estimated_yearly_mileage":10000,
    "purchase_date":"2016-01-01",
    "manufacture_date":"2016-01-01",
    "current_value":1000,
    "is_rhd":true,
    "seats":1,
    "is_parked_home":true,
    "is_import":true
  },
  "usage": {
    "vin":"YV1UZ25UCK1337428",
    "imei":"352801234567810",
    "usage_type":"device"
  },
    "versions": [{
      "upfront_premium":100,
      "subscription_premium":20,
      "pm_premium":0.04,
      "withhold_fee":50,
      "deposit_fee":50,
      "admin_fee":60,
      "mta_fee":20,
      "cancel_fee":50,
      "version_type":"nb",
      "effective_from":1599567165
    }],
    "additional_drivers": [{
      "relationship":"P",
      "title":"003",
      "first_names":"Dave",
      "last_names":"Jones",
      "email":"dave@jones.com",
      "mobile_number":"+447999000011",
      "children":1,
      "has_medical_conditions":true,
      "has_informed_dvla_medical_conditions":false,
      "ncd":1,
      "dob":"1980-12-31",
      "licence_type":"F",
      "employment":"E",
      "occupation":"51D",
      "business":"077",
      "licence_issued_date":"2000-12-31",
      "residency_date":"2000-12-31",
      "has_criminal_conviction":false,
      "convictions": [{
        "code":"AC10",
        "date":"2018-01-01",
        "points":3,
        "ban":0
      }],
      "claims": [{
        "code":"A",
        "date":"2016-01-01",
        "at_fault":false,
        "ncd_lost":false
      }]
    }],
    "pricing": {
      "upfront_rate":100,
      "subscription_rate":20,
      "pm_rate":0.04,
      "subscription_installments":12,
      "withhold_fee":50,
      "deposit_fee":50,
      "admin_fee":60,
      "mta_fee":20,
      "cancel_fee":50
    }
  };

  export default MockPolicy;