const mongoose = require('mongoose')
const Schema = mongoose.Schema

//define collection and schema for companies
let companies = new Schema({
    permission_no: {
        type: String
    },
    permission_dt: {
        type: String
    },
    xcode: {
        type: String
    },
    tel: {
        type: String
    },
    state: {
        type: String
    },
    addr: {
        type: String
    },
    building_purpose: {
        type: String
    },
    id: {
        type: Number
    },
    suspension_end_dt: {
        type: String
    },
    addr_old: {
        type: String
    },
    area: {
        type: String
    },
    passway_width: {
        type: String
    },
    first_register_dt: {
        type: String
    },
    trtmnt_contents: {
        type: String
    },
    stop_dt: {
        type: String
    },
    suspension_start_dt: {
        type: String
    },
    post: {
        type: String
    },
    re_open_dt: {
        type: String
    },
    ycode: {
        type: String
    },
    area_nm: {
        type: String
    },
    equip_area: {
        type: String
    },
    culture_business_type: {
        type: String
    },
    cfr_envrn: {
        type: String
    },
    culture_sports_type: {
        type: String
    },
    detail_stat_nm: {
        type: String
    },
    nm: {
        type: String
    }
}, {
    collection: 'companies'
})

module.exports = mongoose.model('companies', companies)