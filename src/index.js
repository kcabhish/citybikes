import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';

//custom imports
//import StationInfoContainer from './station/StationInfoContainer.js';
import Station from './station/Station.js';
import './index.css';
import './station/Station.css';

const element = <Station network={getNetwork()}/>;
ReactDOM.render(
  element,
  document.getElementById('root')
);
registerServiceWorker();

function getNetwork(){
    return {
        "id": "hubway",
        "location": {
            "city": "Boston, MA",
            "country": "US",
            "latitude": 42.3584308,
            "longitude": -71.0597732
        },
        "name": "Hubway",
        "stations": [
            {
                "empty_slots": 2,
                "extra": {
                    "address": null,
                    "last_updated": 1497801898,
                    "renting": 1,
                    "returning": 1,
                    "uid": "152"
                },
                "free_bikes": 12,
                "id": "0d0f6b413915f118e0c8c7e0ea107ffa",
                "latitude": 42.345901,
                "longitude": -71.063187,
                "name": "Ink Block - Harrison Ave at Herald St",
                "timestamp": "2017-06-18T16:33:01.280000Z"
            },
            {
                "empty_slots": 8,
                "extra": {
                    "address": null,
                    "last_updated": 1497797936,
                    "renting": 1,
                    "returning": 1,
                    "uid": "162"
                },
                "free_bikes": 6,
                "id": "fa1b93d10ff350bd1e7469a1db231aa1",
                "latitude": 42.309796,
                "longitude": -71.092225,
                "name": "Franklin Park - Seaver St at Humbolt Ave",
                "timestamp": "2017-06-18T16:33:01.231000Z"
            },
            {
                "empty_slots": 6,
                "extra": {
                    "address": null,
                    "last_updated": 1497803237,
                    "renting": 1,
                    "returning": 1,
                    "uid": "23"
                },
                "free_bikes": 14,
                "id": "fe8d0aa13fd9937b7d09e4e26d5f0a8d",
                "latitude": 42.35892,
                "longitude": -71.057629,
                "name": "Boston City Hall - 28 State St",
                "timestamp": "2017-06-18T16:33:01.122000Z"
            },
            {
                "empty_slots": 3,
                "extra": {
                    "address": null,
                    "last_updated": 1497776566,
                    "renting": 1,
                    "returning": 1,
                    "uid": "210"
                },
                "free_bikes": 12,
                "id": "7944872d3021ca28cdaca8c32f9d0c7f",
                "latitude": 42.38337841883669,
                "longitude": -71.01612031481636,
                "name": "Bennington St at Byron St",
                "timestamp": "2017-06-18T16:33:01.094000Z"
            },
            {
                "empty_slots": 9,
                "extra": {
                    "address": null,
                    "last_updated": 1497803242,
                    "renting": 1,
                    "returning": 1,
                    "uid": "131"
                },
                "free_bikes": 8,
                "id": "24e99d91d84351d3e224e3d7ef2c7799",
                "latitude": 42.32293117195949,
                "longitude": -71.10014140605927,
                "name": "Jackson Square T Stop",
                "timestamp": "2017-06-18T16:33:01.102000Z"
            },
            {
                "empty_slots": 9,
                "extra": {
                    "address": null,
                    "last_updated": 1497802973,
                    "renting": 1,
                    "returning": 1,
                    "uid": "32"
                },
                "free_bikes": 5,
                "id": "7d2aefcd5d8b2583ca9814b4fe51928b",
                "latitude": 42.34519428944095,
                "longitude": -71.1016970872879,
                "name": "Landmark Center - Brookline Ave at Park Dr",
                "timestamp": "2017-06-18T16:33:01.199000Z"
            },
            {
                "empty_slots": 16,
                "extra": {
                    "address": null,
                    "last_updated": 1497802784,
                    "renting": 1,
                    "returning": 1,
                    "uid": "189"
                },
                "free_bikes": 7,
                "id": "69c98e683921460eecdb85a49a0f7b77",
                "latitude": 42.362427842912396,
                "longitude": -71.08495473861694,
                "name": "Kendall T",
                "timestamp": "2017-06-18T16:33:01.236000Z"
            },
            {
                "empty_slots": 15,
                "extra": {
                    "address": null,
                    "last_updated": 1497802567,
                    "renting": 1,
                    "returning": 1,
                    "uid": "27"
                },
                "free_bikes": 0,
                "id": "045fd5ea449046d51d40934e65b46bb5",
                "latitude": 42.331184,
                "longitude": -71.095171,
                "name": "Roxbury Crossing T Stop - Columbus Ave at Tremont St",
                "timestamp": "2017-06-18T16:33:01.117000Z"
            },
            {
                "empty_slots": 13,
                "extra": {
                    "address": null,
                    "last_updated": 1497803518,
                    "renting": 1,
                    "returning": 1,
                    "uid": "121"
                },
                "free_bikes": 4,
                "id": "0085d07859b67a2f60c8e7dad5f70f1a",
                "latitude": 42.335693,
                "longitude": -71.045859,
                "name": "W Broadway at Dorchester St",
                "timestamp": "2017-06-18T16:33:01.130000Z"
            },
            {
                "empty_slots": 7,
                "extra": {
                    "address": null,
                    "last_updated": 1497798500,
                    "renting": 1,
                    "returning": 1,
                    "uid": "138"
                },
                "free_bikes": 8,
                "id": "af050e8bab271eeebf49b5407a09d415",
                "latitude": 42.326599,
                "longitude": -71.066498,
                "name": "Newmarket Square T Stop - Massachusetts Ave at Newmarket Square",
                "timestamp": "2017-06-18T16:33:01.112000Z"
            },
            {
                "empty_slots": 8,
                "extra": {
                    "address": null,
                    "last_updated": 1497776566,
                    "renting": 1,
                    "returning": 1,
                    "uid": "126"
                },
                "free_bikes": 7,
                "id": "f5577b56bb543db5cb15ae25621fe732",
                "latitude": 42.315692,
                "longitude": -71.098634,
                "name": "Egleston Square - Atherton St at Washington St",
                "timestamp": "2017-06-18T16:33:01.135000Z"
            },
            {
                "empty_slots": 8,
                "extra": {
                    "address": null,
                    "last_updated": 1497801835,
                    "renting": 1,
                    "returning": 1,
                    "uid": "113"
                },
                "free_bikes": 7,
                "id": "8fffe1a4a1052aade40c31c577a5704f",
                "latitude": 42.330473650415165,
                "longitude": -71.05701684951782,
                "name": "Andrew T Stop - Dorchester Ave at Dexter St",
                "timestamp": "2017-06-18T16:33:01.172000Z"
            },
            {
                "empty_slots": 6,
                "extra": {
                    "address": null,
                    "last_updated": 1497801923,
                    "renting": 1,
                    "returning": 1,
                    "uid": "193"
                },
                "free_bikes": 9,
                "id": "ebb4ef2f404d3271ca00042c83ada7a1",
                "latitude": 42.33289074055233,
                "longitude": -71.11658334732056,
                "name": "Brookline Village - Station Street @ MBTA",
                "timestamp": "2017-06-18T16:33:01.164000Z"
            },
            {
                "empty_slots": 15,
                "extra": {
                    "address": null,
                    "last_updated": 1497803409,
                    "renting": 1,
                    "returning": 1,
                    "uid": "67"
                },
                "free_bikes": 9,
                "id": "c91bc9b7e63c282da005f7eac27f8d96",
                "latitude": 42.3581,
                "longitude": -71.093198,
                "name": "MIT at Mass Ave / Amherst St",
                "timestamp": "2017-06-18T16:33:01.217000Z"
            },
            {
                "empty_slots": 6,
                "extra": {
                    "address": null,
                    "last_updated": 1497803122,
                    "renting": 1,
                    "returning": 1,
                    "uid": "68"
                },
                "free_bikes": 13,
                "id": "575e04966344a392bbbf9eccf09f029d",
                "latitude": 42.36507,
                "longitude": -71.1031,
                "name": "Central Square at Mass Ave / Essex St",
                "timestamp": "2017-06-18T16:33:01.218000Z"
            },
            {
                "empty_slots": 12,
                "extra": {
                    "address": null,
                    "last_updated": 1497801868,
                    "renting": 1,
                    "returning": 1,
                    "uid": "72"
                },
                "free_bikes": 3,
                "id": "d8071846cc7cb01f669554ddebf02b65",
                "latitude": 42.362613,
                "longitude": -71.084105,
                "name": "One Broadway / Kendall Sq at Main St / 3rd St",
                "timestamp": "2017-06-18T16:33:01.320000Z"
            },
            {
                "empty_slots": 8,
                "extra": {
                    "address": null,
                    "last_updated": 1497803145,
                    "renting": 1,
                    "returning": 1,
                    "uid": "73"
                },
                "free_bikes": 7,
                "id": "4f0217ba3cf7bea5a7e4d07e58ec259b",
                "latitude": 42.373231,
                "longitude": -71.120886,
                "name": "Harvard Square at Brattle St / Eliot St",
                "timestamp": "2017-06-18T16:33:01.319000Z"
            },
            {
                "empty_slots": 0,
                "extra": {
                    "address": null,
                    "last_updated": 1497803058,
                    "renting": 1,
                    "returning": 1,
                    "uid": "74"
                },
                "free_bikes": 19,
                "id": "559f6c10954fbe02c18f04cc0c2f7ddd",
                "latitude": 42.373268,
                "longitude": -71.118579,
                "name": "Harvard Square at Mass Ave/ Dunster",
                "timestamp": "2017-06-18T16:33:01.318000Z"
            },
            {
                "empty_slots": 3,
                "extra": {
                    "address": null,
                    "last_updated": 1497802688,
                    "renting": 1,
                    "returning": 1,
                    "uid": "76"
                },
                "free_bikes": 14,
                "id": "39595521b8d76cff6372dc8355b1190c",
                "latitude": 42.366426,
                "longitude": -71.105495,
                "name": "Central Sq Post Office / Cambridge City Hall at Mass Ave / Pleasant St",
                "timestamp": "2017-06-18T16:33:01.315000Z"
            },
            {
                "empty_slots": 24,
                "extra": {
                    "address": null,
                    "last_updated": 1497801927,
                    "renting": 1,
                    "returning": 1,
                    "uid": "80"
                },
                "free_bikes": 10,
                "id": "c5e5f61dbd8d26e8fa2e9bac930131e8",
                "latitude": 42.3619622,
                "longitude": -71.0920526,
                "name": "MIT Stata Center at Vassar St / Main St",
                "timestamp": "2017-06-18T16:33:01.177000Z"
            },
            {
                "empty_slots": 13,
                "extra": {
                    "address": null,
                    "last_updated": 1497803274,
                    "renting": 1,
                    "returning": 1,
                    "uid": "84"
                },
                "free_bikes": 2,
                "id": "34c6c5aae93dc743e4ef6dd633ee02bc",
                "latitude": 42.366981,
                "longitude": -71.076472,
                "name": "CambridgeSide Galleria - CambridgeSide PL at Land Blvd",
                "timestamp": "2017-06-18T16:33:01.181000Z"
            },
            {
                "empty_slots": 15,
                "extra": {
                    "address": null,
                    "last_updated": 1497803519,
                    "renting": 1,
                    "returning": 1,
                    "uid": "87"
                },
                "free_bikes": 0,
                "id": "e7bf3cb1dd05da389680f35f83927905",
                "latitude": 42.366621,
                "longitude": -71.114214,
                "name": "Harvard University Housing - 115 Putnam Ave at Peabody Terrace",
                "timestamp": "2017-06-18T16:33:01.180000Z"
            },
            {
                "empty_slots": 10,
                "extra": {
                    "address": null,
                    "last_updated": 1497802663,
                    "renting": 1,
                    "returning": 1,
                    "uid": "88"
                },
                "free_bikes": 9,
                "id": "0e48c04cc3047674d07fd003b5135dfe",
                "latitude": 42.374035,
                "longitude": -71.101427,
                "name": "Inman Square at Vellucci Plaza / Hampshire St",
                "timestamp": "2017-06-18T16:33:01.168000Z"
            },
            {
                "empty_slots": 15,
                "extra": {
                    "address": null,
                    "last_updated": 1497800815,
                    "renting": 1,
                    "returning": 1,
                    "uid": "89"
                },
                "free_bikes": 4,
                "id": "d0d13765d45b5bdf356acd9b859b7b99",
                "latitude": 42.379011,
                "longitude": -71.119945,
                "name": "Harvard Law School at Mass Ave / Jarvis St",
                "timestamp": "2017-06-18T16:33:01.169000Z"
            },
            {
                "empty_slots": 16,
                "extra": {
                    "address": null,
                    "last_updated": 1497802600,
                    "renting": 1,
                    "returning": 1,
                    "uid": "90"
                },
                "free_bikes": 3,
                "id": "75568350ac15d1840f7f00b79913b6ee",
                "latitude": 42.370677,
                "longitude": -71.076529,
                "name": "Lechmere Station at Cambridge St / First St",
                "timestamp": "2017-06-18T16:33:01.249000Z"
            },
            {
                "empty_slots": 10,
                "extra": {
                    "address": null,
                    "last_updated": 1497803286,
                    "renting": 1,
                    "returning": 1,
                    "uid": "91"
                },
                "free_bikes": 9,
                "id": "fce261dec8cf0d2593b65a7e8f726597",
                "latitude": 42.366277,
                "longitude": -71.09169,
                "name": "One Kendall Square at Hampshire St / Portland St",
                "timestamp": "2017-06-18T16:33:01.248000Z"
            },
            {
                "empty_slots": 8,
                "extra": {
                    "address": null,
                    "last_updated": 1497803305,
                    "renting": 1,
                    "returning": 1,
                    "uid": "95"
                },
                "free_bikes": 6,
                "id": "582f82ed392b7b5c072a7bbe40a40dfb",
                "latitude": 42.372969,
                "longitude": -71.094445,
                "name": "Cambridge St - at Columbia St / Webster Ave",
                "timestamp": "2017-06-18T16:33:01.253000Z"
            },
            {
                "empty_slots": 19,
                "extra": {
                    "address": null,
                    "last_updated": 1497802179,
                    "renting": 1,
                    "returning": 1,
                    "uid": "96"
                },
                "free_bikes": 0,
                "id": "8386693bdc273780efffd5d5eb9aed7c",
                "latitude": 42.373379,
                "longitude": -71.111075,
                "name": "Cambridge Main Library at Broadway / Trowbridge St",
                "timestamp": "2017-06-18T16:33:01.258000Z"
            },
            {
                "empty_slots": 16,
                "extra": {
                    "address": null,
                    "last_updated": 1497803114,
                    "renting": 1,
                    "returning": 1,
                    "uid": "104"
                },
                "free_bikes": 3,
                "id": "ad81792b682543ed97bf3188819c0b81",
                "latitude": 42.380287,
                "longitude": -71.125107,
                "name": "Harvard University Radcliffe Quadrangle at Shepard St / Garden St",
                "timestamp": "2017-06-18T16:33:01.195000Z"
            },
            {
                "empty_slots": 17,
                "extra": {
                    "address": null,
                    "last_updated": 1497803472,
                    "renting": 1,
                    "returning": 1,
                    "uid": "105"
                },
                "free_bikes": 2,
                "id": "2c1721a0f22b33fc5bb5c926ff2c7d32",
                "latitude": 42.356954,
                "longitude": -71.113687,
                "name": "Lower Cambridgeport at Magazine St/Riverside Rd",
                "timestamp": "2017-06-18T16:33:01.196000Z"
            },
            {
                "empty_slots": 13,
                "extra": {
                    "address": null,
                    "last_updated": 1497803151,
                    "renting": 1,
                    "returning": 1,
                    "uid": "108"
                },
                "free_bikes": 4,
                "id": "066efb58cb770f3d708a4f83a11fb374",
                "latitude": 42.377945,
                "longitude": -71.116865,
                "name": "Harvard University / SEAS Cruft-Pierce Halls at 29 Oxford St",
                "timestamp": "2017-06-18T16:33:01.186000Z"
            },
            {
                "empty_slots": 14,
                "extra": {
                    "address": null,
                    "last_updated": 1497801653,
                    "renting": 1,
                    "returning": 1,
                    "uid": "110"
                },
                "free_bikes": 0,
                "id": "c3a13f2adb7762587acf15eec38bd91f",
                "latitude": 42.376369,
                "longitude": -71.114025,
                "name": "Harvard University Gund Hall at Quincy St / Kirkland S",
                "timestamp": "2017-06-18T16:33:01.171000Z"
            },
            {
                "empty_slots": 9,
                "extra": {
                    "address": null,
                    "last_updated": 1497803348,
                    "renting": 1,
                    "returning": 1,
                    "uid": "115"
                },
                "free_bikes": 9,
                "id": "272d2ed6d42ae8921f98b33d030519b6",
                "latitude": 42.387995,
                "longitude": -71.119084,
                "name": "Porter Square Station",
                "timestamp": "2017-06-18T16:33:01.166000Z"
            },
            {
                "empty_slots": 16,
                "extra": {
                    "address": null,
                    "last_updated": 1497803149,
                    "renting": 1,
                    "returning": 1,
                    "uid": "116"
                },
                "free_bikes": 3,
                "id": "119f3ccd51ee15db7ff6f41bd497c601",
                "latitude": 42.370803,
                "longitude": -71.104412,
                "name": "359 Broadway - Broadway at Fayette Street",
                "timestamp": "2017-06-18T16:33:01.273000Z"
            },
            {
                "empty_slots": 15,
                "extra": {
                    "address": null,
                    "last_updated": 1497801351,
                    "renting": 1,
                    "returning": 1,
                    "uid": "118"
                },
                "free_bikes": 4,
                "id": "6cf4bfc8093794c40451d865b74e695e",
                "latitude": 42.397828,
                "longitude": -71.130516,
                "name": "Linear Park - Mass. Ave. at Cameron Ave. ",
                "timestamp": "2017-06-18T16:33:01.142000Z"
            },
            {
                "empty_slots": 16,
                "extra": {
                    "address": null,
                    "last_updated": 1497803030,
                    "renting": 1,
                    "returning": 1,
                    "uid": "140"
                },
                "free_bikes": 1,
                "id": "73935d28a37369a3e00400aacfb755f7",
                "latitude": 42.388966,
                "longitude": -71.132788,
                "name": "Danehy Park",
                "timestamp": "2017-06-18T16:33:01.307000Z"
            },
            {
                "empty_slots": 18,
                "extra": {
                    "address": null,
                    "last_updated": 1497798468,
                    "renting": 1,
                    "returning": 1,
                    "uid": "142"
                },
                "free_bikes": 5,
                "id": "2b4e2a73580c8b3d22be6ea6480f0f30",
                "latitude": 42.396105,
                "longitude": -71.139459,
                "name": "Alewife Station at Russell Field",
                "timestamp": "2017-06-18T16:33:01.305000Z"
            },
            {
                "empty_slots": 16,
                "extra": {
                    "address": null,
                    "last_updated": 1497803002,
                    "renting": 1,
                    "returning": 1,
                    "uid": "143"
                },
                "free_bikes": 7,
                "id": "e05d253ccb22c56ee8624c467c8d81f6",
                "latitude": 42.369885,
                "longitude": -71.069957,
                "name": "EF - North Point Park",
                "timestamp": "2017-06-18T16:33:01.306000Z"
            },
            {
                "empty_slots": 17,
                "extra": {
                    "address": null,
                    "last_updated": 1497794026,
                    "renting": 1,
                    "returning": 1,
                    "uid": "145"
                },
                "free_bikes": 2,
                "id": "c199d7ad26651f605e7bb8778852a5e4",
                "latitude": 42.392766,
                "longitude": -71.129042,
                "name": "Rindge Avenue - O'Neill Library",
                "timestamp": "2017-06-18T16:33:01.303000Z"
            },
            {
                "empty_slots": 13,
                "extra": {
                    "address": null,
                    "last_updated": 1497803550,
                    "renting": 1,
                    "returning": 1,
                    "uid": "75"
                },
                "free_bikes": 2,
                "id": "295b9c9707dfc5ad38f5a26740a06b48",
                "latitude": 42.36346469304347,
                "longitude": -71.10057324171066,
                "name": "Lafayette Square at Mass Ave / Main St / Columbia St",
                "timestamp": "2017-06-18T16:33:01.317000Z"
            },
            {
                "empty_slots": 10,
                "extra": {
                    "address": null,
                    "last_updated": 1497802984,
                    "renting": 1,
                    "returning": 1,
                    "uid": "97"
                },
                "free_bikes": 8,
                "id": "b01bba5bea3e1f63d6319d1f18a21271",
                "latitude": 42.36919031768079,
                "longitude": -71.11714124679565,
                "name": "Harvard University River Houses at DeWolfe St / Cowperthwaite St",
                "timestamp": "2017-06-18T16:33:01.256000Z"
            },
            {
                "empty_slots": 18,
                "extra": {
                    "address": null,
                    "last_updated": 1497801474,
                    "renting": 1,
                    "returning": 1,
                    "uid": "177"
                },
                "free_bikes": 1,
                "id": "2073f8fbb163ff4e693cfad00f0dd64f",
                "latitude": 42.36264779118595,
                "longitude": -71.10006093978882,
                "name": "University Park",
                "timestamp": "2017-06-18T16:33:01.224000Z"
            },
            {
                "empty_slots": 11,
                "extra": {
                    "address": null,
                    "last_updated": 1497803315,
                    "renting": 1,
                    "returning": 1,
                    "uid": "107"
                },
                "free_bikes": 8,
                "id": "d5d8f74a35cbfb15b544ff984c9f2307",
                "latitude": 42.3625,
                "longitude": -71.08822,
                "name": "Ames St at Main St",
                "timestamp": "2017-06-18T16:33:01.193000Z"
            },
            {
                "empty_slots": 9,
                "extra": {
                    "address": null,
                    "last_updated": 1497797653,
                    "renting": 1,
                    "returning": 1,
                    "uid": "185"
                },
                "free_bikes": 6,
                "id": "bbdda846f9d9d1b155d4a3614ed7ecfe",
                "latitude": 42.36544486137399,
                "longitude": -71.08277142047882,
                "name": "Third at Binney",
                "timestamp": "2017-06-18T16:33:01.242000Z"
            },
            {
                "empty_slots": 15,
                "extra": {
                    "address": null,
                    "last_updated": 1497802328,
                    "renting": 1,
                    "returning": 1,
                    "uid": "139"
                },
                "free_bikes": 4,
                "id": "3831590999fc4a7f52d08952a6bd045d",
                "latitude": 42.361780439606044,
                "longitude": -71.10809952020645,
                "name": "Dana Park",
                "timestamp": "2017-06-18T16:33:01.110000Z"
            },
            {
                "empty_slots": 21,
                "extra": {
                    "address": null,
                    "last_updated": 1497803468,
                    "renting": 1,
                    "returning": 1,
                    "uid": "179"
                },
                "free_bikes": 4,
                "id": "943a5046e94d9462496182d9e38da371",
                "latitude": 42.355601213279265,
                "longitude": -71.10394477844238,
                "name": "MIT Vassar St",
                "timestamp": "2017-06-18T16:33:01.158000Z"
            },
            {
                "empty_slots": 16,
                "extra": {
                    "address": null,
                    "last_updated": 1497798151,
                    "renting": 1,
                    "returning": 1,
                    "uid": "117"
                },
                "free_bikes": 3,
                "id": "59599891ac2365b5fa23d5f61ecf17c4",
                "latitude": 42.366095,
                "longitude": -71.086388,
                "name": "Binney St / Sixth St",
                "timestamp": "2017-06-18T16:33:01.272000Z"
            },
            {
                "empty_slots": 14,
                "extra": {
                    "address": null,
                    "last_updated": 1497794798,
                    "renting": 1,
                    "returning": 1,
                    "uid": "151"
                },
                "free_bikes": 5,
                "id": "0f6de24ee3d6995945a685ecb9fe5771",
                "latitude": 42.358155,
                "longitude": -71.052163,
                "name": "Surface Rd at India St",
                "timestamp": "2017-06-18T16:33:01.276000Z"
            },
            {
                "empty_slots": 11,
                "extra": {
                    "address": null,
                    "last_updated": 1497802907,
                    "renting": 1,
                    "returning": 1,
                    "uid": "19"
                },
                "free_bikes": 4,
                "id": "97a624904d68d950bc3c5016b4d4b28e",
                "latitude": 42.347241,
                "longitude": -71.105301,
                "name": "Park Dr at Buswell St",
                "timestamp": "2017-06-18T16:33:01.270000Z"
            },
            {
                "empty_slots": 5,
                "extra": {
                    "address": null,
                    "last_updated": 1497801826,
                    "renting": 1,
                    "returning": 1,
                    "uid": "10"
                },
                "free_bikes": 4,
                "id": "a5edb12b9f8d171ae1165a9a2ae1f644",
                "latitude": 42.350406,
                "longitude": -71.108279,
                "name": "B.U. Central - 725 Comm. Ave.",
                "timestamp": "2017-06-18T16:33:01.260000Z"
            },
            {
                "empty_slots": 14,
                "extra": {
                    "address": null,
                    "last_updated": 1497803197,
                    "renting": 1,
                    "returning": 1,
                    "uid": "85"
                },
                "free_bikes": 5,
                "id": "6914c1962c64ca2a1c5f7bba047d9788",
                "latitude": 42.378338,
                "longitude": -71.048927,
                "name": "Spaulding Rehabilitation Hospital - Charlestown Navy Yard",
                "timestamp": "2017-06-18T16:33:01.182000Z"
            },
            {
                "empty_slots": 4,
                "extra": {
                    "address": null,
                    "last_updated": 1497802620,
                    "renting": 1,
                    "returning": 1,
                    "uid": "94"
                },
                "free_bikes": 5,
                "id": "1e356b3d262d3819ace481af4e2d4135",
                "latitude": 42.375603,
                "longitude": -71.064608,
                "name": "Main St at Austin St",
                "timestamp": "2017-06-18T16:33:01.255000Z"
            },
            {
                "empty_slots": 14,
                "extra": {
                    "address": null,
                    "last_updated": 1497782857,
                    "renting": 1,
                    "returning": 1,
                    "uid": "171"
                },
                "free_bikes": 5,
                "id": "feba1b6e8c43b983bf48479cbacec840",
                "latitude": 42.37408991426522,
                "longitude": -71.06905996799469,
                "name": "Bunker Hill Community College",
                "timestamp": "2017-06-18T16:33:01.226000Z"
            },
            {
                "empty_slots": 13,
                "extra": {
                    "address": null,
                    "last_updated": 1497798435,
                    "renting": 1,
                    "returning": 1,
                    "uid": "150"
                },
                "free_bikes": 6,
                "id": "77b48a5112ce801c139722ae4d0edad7",
                "latitude": 42.344137,
                "longitude": -71.052608,
                "name": "State Street at Channel Center",
                "timestamp": "2017-06-18T16:33:01.278000Z"
            },
            {
                "empty_slots": 11,
                "extra": {
                    "address": null,
                    "last_updated": 1497793385,
                    "renting": 1,
                    "returning": 1,
                    "uid": "202"
                },
                "free_bikes": 4,
                "id": "bb5087ad1912ee66a53a0245ce50eef4",
                "latitude": 42.30791,
                "longitude": -71.080952,
                "name": "Grove Hall Library - 41 Geneva Ave",
                "timestamp": "2017-06-18T16:33:01.238000Z"
            },
            {
                "empty_slots": 7,
                "extra": {
                    "address": null,
                    "last_updated": 1497776435,
                    "renting": 1,
                    "returning": 1,
                    "uid": "200"
                },
                "free_bikes": 7,
                "id": "294242dbc29d86a80477f22608479bc8",
                "latitude": 42.332817,
                "longitude": -71.081198,
                "name": "Washington St at Melnea Cass Blvd",
                "timestamp": "2017-06-18T16:33:01.301000Z"
            },
            {
                "empty_slots": 11,
                "extra": {
                    "address": null,
                    "last_updated": 1497800950,
                    "renting": 1,
                    "returning": 1,
                    "uid": "25"
                },
                "free_bikes": 4,
                "id": "a45aabe9b54b087818818dc78372bc43",
                "latitude": 42.341332,
                "longitude": -71.076847,
                "name": "South End Library - Tremont St at W Newton St",
                "timestamp": "2017-06-18T16:33:01.115000Z"
            },
            {
                "empty_slots": 6,
                "extra": {
                    "address": null,
                    "last_updated": 1497796752,
                    "renting": 1,
                    "returning": 1,
                    "uid": "201"
                },
                "free_bikes": 9,
                "id": "e1eb05d342c7993b9628a687211b04ea",
                "latitude": 42.316902,
                "longitude": -71.091946,
                "name": "NCAAA - Walnut Ave at Crawford St",
                "timestamp": "2017-06-18T16:33:01.155000Z"
            },
            {
                "empty_slots": 14,
                "extra": {
                    "address": null,
                    "last_updated": 1497803287,
                    "renting": 1,
                    "returning": 1,
                    "uid": "163"
                },
                "free_bikes": 5,
                "id": "f0683fe3086af95afeae07cc0357fd52",
                "latitude": 42.344792,
                "longitude": -71.044024,
                "name": "The Lawn on D",
                "timestamp": "2017-06-18T16:33:01.128000Z"
            },
            {
                "empty_slots": 8,
                "extra": {
                    "address": null,
                    "last_updated": 1497802883,
                    "renting": 1,
                    "returning": 1,
                    "uid": "186"
                },
                "free_bikes": 7,
                "id": "036ab7e3f20a35bce54f4497aa2470b9",
                "latitude": 42.3481,
                "longitude": -71.03764,
                "name": "Congress St at Northern Ave",
                "timestamp": "2017-06-18T16:33:01.235000Z"
            },
            {
                "empty_slots": 8,
                "extra": {
                    "address": null,
                    "last_updated": 1497791276,
                    "renting": 1,
                    "returning": 1,
                    "uid": "159"
                },
                "free_bikes": 7,
                "id": "a9af3ba18dec64bdfb9c2b644956243f",
                "latitude": 42.3279727,
                "longitude": -71.1108971,
                "name": "S Huntington Ave at Heath St",
                "timestamp": "2017-06-18T16:33:01.282000Z"
            },
            {
                "empty_slots": 3,
                "extra": {
                    "address": null,
                    "last_updated": 1497776488,
                    "renting": 1,
                    "returning": 1,
                    "uid": "173"
                },
                "free_bikes": 10,
                "id": "52f7c777f0850cb03ceb546289c74649",
                "latitude": 42.3106,
                "longitude": -71.0539,
                "name": "Savin Hill T Stop - S Sydney St at Bay St",
                "timestamp": "2017-06-18T16:33:01.223000Z"
            },
            {
                "empty_slots": 18,
                "extra": {
                    "address": null,
                    "last_updated": 1497803520,
                    "renting": 1,
                    "returning": 1,
                    "uid": "9"
                },
                "free_bikes": 1,
                "id": "11ebc79d2e72d143c2ea61f582052056",
                "latitude": 42.351246,
                "longitude": -71.115639,
                "name": "Commonwealth Ave at Buick St",
                "timestamp": "2017-06-18T16:33:01.299000Z"
            },
            {
                "empty_slots": 14,
                "extra": {
                    "address": null,
                    "last_updated": 1497799945,
                    "renting": 1,
                    "returning": 1,
                    "uid": "136"
                },
                "free_bikes": 5,
                "id": "b03546e29d60dde109fa231ff93c88b5",
                "latitude": 42.344796,
                "longitude": -71.031614,
                "name": "ID Building West",
                "timestamp": "2017-06-18T16:33:01.106000Z"
            },
            {
                "empty_slots": 9,
                "extra": {
                    "address": null,
                    "last_updated": 1497800123,
                    "renting": 1,
                    "returning": 1,
                    "uid": "215"
                },
                "free_bikes": 6,
                "id": "8ece5437df6558cd259deb3b2af0e25e",
                "latitude": 42.370744,
                "longitude": -71.044201,
                "name": "The Eddy - New St at Sumner St",
                "timestamp": "2017-06-18T16:33:01.089000Z"
            },
            {
                "empty_slots": 2,
                "extra": {
                    "address": null,
                    "last_updated": 1497776461,
                    "renting": 1,
                    "returning": 1,
                    "uid": "209"
                },
                "free_bikes": 13,
                "id": "bbabf30a0df284668fd7594ab1218a56",
                "latitude": 42.379772,
                "longitude": -71.027448,
                "name": "Chelsea St at Saratoga St",
                "timestamp": "2017-06-18T16:33:01.310000Z"
            },
            {
                "empty_slots": 14,
                "extra": {
                    "address": null,
                    "last_updated": 1497802211,
                    "renting": 1,
                    "returning": 1,
                    "uid": "192"
                },
                "free_bikes": 5,
                "id": "4d51f6d4dc4b79326311d888ba73a86d",
                "latitude": 42.354659,
                "longitude": -71.053181,
                "name": "Purchase St at Pearl St",
                "timestamp": "2017-06-18T16:33:01.165000Z"
            },
            {
                "empty_slots": 9,
                "extra": {
                    "address": null,
                    "last_updated": 1497800874,
                    "renting": 1,
                    "returning": 1,
                    "uid": "13"
                },
                "free_bikes": 10,
                "id": "b6616e5b2a7c887cb254715951d7665e",
                "latitude": 42.336437,
                "longitude": -71.073089,
                "name": "Boston Medical Center - E Concord St at Harrison Ave",
                "timestamp": "2017-06-18T16:33:01.262000Z"
            },
            {
                "empty_slots": 11,
                "extra": {
                    "address": null,
                    "last_updated": 1497803406,
                    "renting": 1,
                    "returning": 1,
                    "uid": "125"
                },
                "free_bikes": 3,
                "id": "e3a9e145f0822ad24428a34afa150534",
                "latitude": 42.320998,
                "longitude": -71.110833,
                "name": "Hyde Square - Barbara St at Centre St",
                "timestamp": "2017-06-18T16:33:01.134000Z"
            },
            {
                "empty_slots": 12,
                "extra": {
                    "address": null,
                    "last_updated": 1497800437,
                    "renting": 1,
                    "returning": 1,
                    "uid": "167"
                },
                "free_bikes": 2,
                "id": "122be9f4f54881d9923e0ad6f490c3b7",
                "latitude": 42.317642,
                "longitude": -71.056664,
                "name": "Ryan Playground - Dorchester Ave at Harbor View St",
                "timestamp": "2017-06-18T16:33:01.140000Z"
            },
            {
                "empty_slots": 8,
                "extra": {
                    "address": null,
                    "last_updated": 1497776521,
                    "renting": 1,
                    "returning": 1,
                    "uid": "111"
                },
                "free_bikes": 7,
                "id": "f011b03ae269733cd81eb2058feeafe6",
                "latitude": 42.40449,
                "longitude": -71.123413,
                "name": "Packard Ave / Powderhouse Blvd",
                "timestamp": "2017-06-18T16:33:01.170000Z"
            },
            {
                "empty_slots": 12,
                "extra": {
                    "address": null,
                    "last_updated": 1497798972,
                    "renting": 1,
                    "returning": 1,
                    "uid": "77"
                },
                "free_bikes": 2,
                "id": "fc9d0d6dab0b0ccbb300289b4b2e92df",
                "latitude": 42.386844,
                "longitude": -71.09812,
                "name": "Somerville City Hall",
                "timestamp": "2017-06-18T16:33:01.313000Z"
            },
            {
                "empty_slots": 5,
                "extra": {
                    "address": null,
                    "last_updated": 1497802996,
                    "renting": 1,
                    "returning": 1,
                    "uid": "137"
                },
                "free_bikes": 10,
                "id": "51ae4b12dfa3be5bf1cfd5ec621b2c3b",
                "latitude": 42.398365,
                "longitude": -71.107818,
                "name": "Magoun Square at Trum Field",
                "timestamp": "2017-06-18T16:33:01.104000Z"
            },
            {
                "empty_slots": 9,
                "extra": {
                    "address": null,
                    "last_updated": 1497803224,
                    "renting": 1,
                    "returning": 1,
                    "uid": "102"
                },
                "free_bikes": 6,
                "id": "ad43939d620ef225d35eafdb9ef9a29d",
                "latitude": 42.400877,
                "longitude": -71.116772,
                "name": "Powder House Circle - Nathan Tufts Park",
                "timestamp": "2017-06-18T16:33:01.190000Z"
            },
            {
                "empty_slots": 8,
                "extra": {
                    "address": null,
                    "last_updated": 1497803212,
                    "renting": 1,
                    "returning": 1,
                    "uid": "39"
                },
                "free_bikes": 10,
                "id": "05f50b281104f880804e0111662fecf8",
                "latitude": 42.338514601785995,
                "longitude": -71.07404083013535,
                "name": "Washington St at Rutland St",
                "timestamp": "2017-06-18T16:33:01.197000Z"
            },
            {
                "empty_slots": 9,
                "extra": {
                    "address": null,
                    "last_updated": 1497803114,
                    "renting": 1,
                    "returning": 1,
                    "uid": "33"
                },
                "free_bikes": 6,
                "id": "da1dc98bb8c74306eca078f7dac261a7",
                "latitude": 42.348706,
                "longitude": -71.097009,
                "name": "Kenmore Square",
                "timestamp": "2017-06-18T16:33:01.198000Z"
            },
            {
                "empty_slots": 16,
                "extra": {
                    "address": null,
                    "last_updated": 1497803511,
                    "renting": 1,
                    "returning": 1,
                    "uid": "52"
                },
                "free_bikes": 2,
                "id": "832fc4a60379cdc7824acb0c1dbf5f6c",
                "latitude": 42.348717,
                "longitude": -71.085954,
                "name": "Newbury St at Hereford St",
                "timestamp": "2017-06-18T16:33:01.154000Z"
            },
            {
                "empty_slots": 9,
                "extra": {
                    "address": null,
                    "last_updated": 1497803061,
                    "renting": 1,
                    "returning": 1,
                    "uid": "134"
                },
                "free_bikes": 6,
                "id": "c4428dbd91bae12bb93beaab72097696",
                "latitude": 42.350413,
                "longitude": -71.07655,
                "name": "Boylston St at Dartmouth St",
                "timestamp": "2017-06-18T16:33:01.109000Z"
            },
            {
                "empty_slots": 8,
                "extra": {
                    "address": null,
                    "last_updated": 1497802253,
                    "renting": 1,
                    "returning": 1,
                    "uid": "42"
                },
                "free_bikes": 14,
                "id": "29061e325bd311f213aa93822e20394f",
                "latitude": 42.352033,
                "longitude": -71.070627,
                "name": "Boylston St at Arlington St",
                "timestamp": "2017-06-18T16:33:01.292000Z"
            },
            {
                "empty_slots": 10,
                "extra": {
                    "address": null,
                    "last_updated": 1497802266,
                    "renting": 1,
                    "returning": 1,
                    "uid": "15"
                },
                "free_bikes": 5,
                "id": "ea09e29b591e36435fb8b78918651709",
                "latitude": 42.3615457081725,
                "longitude": -71.13776206970215,
                "name": "Brighton Mills - 370 Western Ave",
                "timestamp": "2017-06-18T16:33:01.265000Z"
            },
            {
                "empty_slots": 8,
                "extra": {
                    "address": null,
                    "last_updated": 1497802690,
                    "renting": 1,
                    "returning": 1,
                    "uid": "24"
                },
                "free_bikes": 11,
                "id": "5bf7e1226592f7ed603ce0690fa6a566",
                "latitude": 42.35148193460858,
                "longitude": -71.04436084628105,
                "name": "Seaport Square - Seaport Blvd at Northern Ave",
                "timestamp": "2017-06-18T16:33:01.113000Z"
            },
            {
                "empty_slots": 5,
                "extra": {
                    "address": null,
                    "last_updated": 1497799708,
                    "renting": 1,
                    "returning": 1,
                    "uid": "3"
                },
                "free_bikes": 8,
                "id": "c039b478f4cd30b69758596ddcfd5cf5",
                "latitude": 42.34011512249236,
                "longitude": -71.10061883926392,
                "name": "Colleges of the Fenway - Fenway at Avenue Louis Pasteur",
                "timestamp": "2017-06-18T16:33:01.183000Z"
            },
            {
                "empty_slots": 9,
                "extra": {
                    "address": null,
                    "last_updated": 1497803296,
                    "renting": 1,
                    "returning": 1,
                    "uid": "46"
                },
                "free_bikes": 9,
                "id": "95fed99e3a4c8fd726a808cfe4bb2587",
                "latitude": 42.3436658245146,
                "longitude": -71.08582377433777,
                "name": "Christian Science Plaza - Massachusetts Ave at Westland Ave",
                "timestamp": "2017-06-18T16:33:01.286000Z"
            },
            {
                "empty_slots": 10,
                "extra": {
                    "address": null,
                    "last_updated": 1497802750,
                    "renting": 1,
                    "returning": 1,
                    "uid": "31"
                },
                "free_bikes": 5,
                "id": "bf311202d82fe5d1e014192daf9c7848",
                "latitude": 42.34896049714204,
                "longitude": -71.04199782013893,
                "name": "Seaport Hotel - Congress St at Seaport Ln",
                "timestamp": "2017-06-18T16:33:01.201000Z"
            },
            {
                "empty_slots": 5,
                "extra": {
                    "address": null,
                    "last_updated": 1497797488,
                    "renting": 1,
                    "returning": 1,
                    "uid": "56"
                },
                "free_bikes": 9,
                "id": "ecd52be381f64f509517b6a0e4d7f6e7",
                "latitude": 42.32854046293402,
                "longitude": -71.08416482806204,
                "name": "Dudley Square - Dudley St at Warren St",
                "timestamp": "2017-06-18T16:33:01.149000Z"
            },
            {
                "empty_slots": 5,
                "extra": {
                    "address": null,
                    "last_updated": 1497801907,
                    "renting": 1,
                    "returning": 1,
                    "uid": "160"
                },
                "free_bikes": 8,
                "id": "3dc7433790fc03a6749498c3208a4e96",
                "latitude": 42.33758601097239,
                "longitude": -71.09627097845076,
                "name": "Wentworth Institute of Technology - Huntington Ave at Vancouver St",
                "timestamp": "2017-06-18T16:33:01.123000Z"
            },
            {
                "empty_slots": 7,
                "extra": {
                    "address": null,
                    "last_updated": 1497776465,
                    "renting": 1,
                    "returning": 1,
                    "uid": "196"
                },
                "free_bikes": 3,
                "id": "ea3c9ae5995449b37ad7db1727bd6dee",
                "latitude": 42.31787329345602,
                "longitude": -71.08243077993393,
                "name": "Roxbury YMCA - Warren St at MLK Blvd",
                "timestamp": "2017-06-18T16:33:01.239000Z"
            },
            {
                "empty_slots": 9,
                "extra": {
                    "address": null,
                    "last_updated": 1497789202,
                    "renting": 1,
                    "returning": 1,
                    "uid": "197"
                },
                "free_bikes": 6,
                "id": "3ef6b015b6284b4731db6b9e02a3d1cb",
                "latitude": 42.32143814183195,
                "longitude": -71.09126061201096,
                "name": "MLK Blvd at Washington St",
                "timestamp": "2017-06-18T16:33:01.161000Z"
            },
            {
                "empty_slots": 4,
                "extra": {
                    "address": null,
                    "last_updated": 1497776546,
                    "renting": 1,
                    "returning": 1,
                    "uid": "199"
                },
                "free_bikes": 11,
                "id": "fc838ae545f5744d24cc84c44da26215",
                "latitude": 42.318697341722434,
                "longitude": -71.0697814822197,
                "name": "Upham's Corner T Stop - Magnolia St at Dudley St",
                "timestamp": "2017-06-18T16:33:01.157000Z"
            },
            {
                "empty_slots": 5,
                "extra": {
                    "address": null,
                    "last_updated": 1497800766,
                    "renting": 1,
                    "returning": 1,
                    "uid": "51"
                },
                "free_bikes": 9,
                "id": "9f87f7c7336c31701521ddc50d39be0a",
                "latitude": 42.3350989929096,
                "longitude": -71.07903778553009,
                "name": "Washington St at Lenox St",
                "timestamp": "2017-06-18T16:33:01.151000Z"
            },
            {
                "empty_slots": 12,
                "extra": {
                    "address": null,
                    "last_updated": 1497802604,
                    "renting": 1,
                    "returning": 1,
                    "uid": "6"
                },
                "free_bikes": 3,
                "id": "e0a4e5060d7a21bd1cf3f8d9fc45f411",
                "latitude": 42.36130407013564,
                "longitude": -71.0652096569538,
                "name": "Cambridge St at Joy St",
                "timestamp": "2017-06-18T16:33:01.233000Z"
            },
            {
                "empty_slots": 9,
                "extra": {
                    "address": null,
                    "last_updated": 1497801809,
                    "renting": 1,
                    "returning": 1,
                    "uid": "35"
                },
                "free_bikes": 14,
                "id": "a079b4ed0cfb2bc67acd735d5f2ca325",
                "latitude": 42.35530156110769,
                "longitude": -71.0582560300827,
                "name": "Arch St at Franklin St",
                "timestamp": "2017-06-18T16:33:01.206000Z"
            },
            {
                "empty_slots": 15,
                "extra": {
                    "address": null,
                    "last_updated": 1497803536,
                    "renting": 1,
                    "returning": 1,
                    "uid": "65"
                },
                "free_bikes": 4,
                "id": "fbe59f14d93321aa504adc16f1081148",
                "latitude": 42.347763454147454,
                "longitude": -71.0453599691391,
                "name": "Boston Convention and Exhibition Center - Summer St at West Side Dr",
                "timestamp": "2017-06-18T16:33:01.215000Z"
            },
            {
                "empty_slots": 15,
                "extra": {
                    "address": null,
                    "last_updated": 1497803480,
                    "renting": 1,
                    "returning": 1,
                    "uid": "103"
                },
                "free_bikes": 0,
                "id": "2b13bff9013c2beaf86e5f4544274345",
                "latitude": 42.346563,
                "longitude": -71.128374,
                "name": "JFK Crossing at Harvard St. / Thorndike St.",
                "timestamp": "2017-06-18T16:33:01.191000Z"
            },
            {
                "empty_slots": 8,
                "extra": {
                    "address": null,
                    "last_updated": 1497802987,
                    "renting": 1,
                    "returning": 1,
                    "uid": "69"
                },
                "free_bikes": 10,
                "id": "f5cd79c9dd25baf7099ff87f1837686a",
                "latitude": 42.341598,
                "longitude": -71.123338,
                "name": "Coolidge Corner - Beacon St @ Centre St",
                "timestamp": "2017-06-18T16:33:01.219000Z"
            },
            {
                "empty_slots": 14,
                "extra": {
                    "address": null,
                    "last_updated": 1497800391,
                    "renting": 1,
                    "returning": 1,
                    "uid": "114"
                },
                "free_bikes": 0,
                "id": "6f7189e1db7479b6f143e990b6a2f79d",
                "latitude": 42.402763,
                "longitude": -71.126908,
                "name": "Teele Square at 239 Holland St",
                "timestamp": "2017-06-18T16:33:01.167000Z"
            },
            {
                "empty_slots": 4,
                "extra": {
                    "address": null,
                    "last_updated": 1497802430,
                    "renting": 1,
                    "returning": 1,
                    "uid": "5"
                },
                "free_bikes": 11,
                "id": "0ebfbd58421465842f99d4e20c0188a8",
                "latitude": 42.341814,
                "longitude": -71.090179,
                "name": "Northeastern University - North Parking Lot",
                "timestamp": "2017-06-18T16:33:01.298000Z"
            },
            {
                "empty_slots": 15,
                "extra": {
                    "address": null,
                    "last_updated": 1497802376,
                    "renting": 1,
                    "returning": 1,
                    "uid": "221"
                },
                "free_bikes": 4,
                "id": "8d970bd1cdb480aeebc10da260449e02",
                "latitude": 42.37250864997261,
                "longitude": -71.11305356025696,
                "name": "Verizon Innovation Hub 10 Ware Street",
                "timestamp": "2017-06-18T16:33:01.241000Z"
            },
            {
                "empty_slots": 12,
                "extra": {
                    "address": null,
                    "last_updated": 1497802932,
                    "renting": 1,
                    "returning": 1,
                    "uid": "141"
                },
                "free_bikes": 1,
                "id": "d797b3a092f9f889b1cf181ec17e1ae2",
                "latitude": 42.363560158429884,
                "longitude": -71.08216792345047,
                "name": "Kendall Street",
                "timestamp": "2017-06-18T16:33:01.309000Z"
            },
            {
                "empty_slots": 9,
                "extra": {
                    "address": null,
                    "last_updated": 1497796047,
                    "renting": 1,
                    "returning": 1,
                    "uid": "176"
                },
                "free_bikes": 6,
                "id": "352815b0fd48c554845e499609a51347",
                "latitude": 42.38674802045056,
                "longitude": -71.11901879310608,
                "name": "Lesley University",
                "timestamp": "2017-06-18T16:33:01.207000Z"
            },
            {
                "empty_slots": 19,
                "extra": {
                    "address": null,
                    "last_updated": 1497802748,
                    "renting": 1,
                    "returning": 1,
                    "uid": "178"
                },
                "free_bikes": 0,
                "id": "0e29fe31b281f3b6ca6f7c06c8eb7aa4",
                "latitude": 42.35957320109044,
                "longitude": -71.10129475593567,
                "name": "MIT Pacific St at Purrington St",
                "timestamp": "2017-06-18T16:33:01.162000Z"
            },
            {
                "empty_slots": 13,
                "extra": {
                    "address": null,
                    "last_updated": 1497801533,
                    "renting": 1,
                    "returning": 1,
                    "uid": "180"
                },
                "free_bikes": 6,
                "id": "8482b3ad353c1e6e9e317296f41eb064",
                "latitude": 42.37478628706384,
                "longitude": -71.13320231437683,
                "name": "Mt Auburn",
                "timestamp": "2017-06-18T16:33:01.230000Z"
            },
            {
                "empty_slots": 11,
                "extra": {
                    "address": null,
                    "last_updated": 1497802935,
                    "renting": 1,
                    "returning": 1,
                    "uid": "195"
                },
                "free_bikes": 12,
                "id": "7bd2d765ef465e66ae4ad4623daf4917",
                "latitude": 42.3720597013741,
                "longitude": -71.07202649116516,
                "name": "Brian P. Murphy Staircase at Child Street",
                "timestamp": "2017-06-18T16:33:01.159000Z"
            },
            {
                "empty_slots": 9,
                "extra": {
                    "address": null,
                    "last_updated": 1497776507,
                    "renting": 1,
                    "returning": 1,
                    "uid": "183"
                },
                "free_bikes": 10,
                "id": "246f58e0ae4db954e8dae72d11e19a81",
                "latitude": 42.395588457167094,
                "longitude": -71.14260613918304,
                "name": "Alewife MBTA at Steel Place",
                "timestamp": "2017-06-18T16:33:01.229000Z"
            },
            {
                "empty_slots": 12,
                "extra": {
                    "address": null,
                    "last_updated": 1497801006,
                    "renting": 1,
                    "returning": 1,
                    "uid": "70"
                },
                "free_bikes": 11,
                "id": "6eeb219ec20094deafc039019160b33f",
                "latitude": 42.37199165408676,
                "longitude": -71.12226963043213,
                "name": "Harvard Kennedy School at Bennett St / Eliot St",
                "timestamp": "2017-06-18T16:33:01.323000Z"
            },
            {
                "empty_slots": 18,
                "extra": {
                    "address": null,
                    "last_updated": 1497801530,
                    "renting": 1,
                    "returning": 1,
                    "uid": "184"
                },
                "free_bikes": 0,
                "id": "1f822fdb6173d31544d095e4fd981415",
                "latitude": 42.35775309465199,
                "longitude": -71.10393404960632,
                "name": "Sidney Research Campus/ Erie Street at Waverly",
                "timestamp": "2017-06-18T16:33:01.232000Z"
            },
            {
                "empty_slots": 7,
                "extra": {
                    "address": null,
                    "last_updated": 1497803440,
                    "renting": 1,
                    "returning": 1,
                    "uid": "44"
                },
                "free_bikes": 12,
                "id": "60ef31e770a3ea5dd7f350fc8877b5d3",
                "latitude": 42.360613,
                "longitude": -71.057452,
                "name": "Congress St at North St",
                "timestamp": "2017-06-18T16:33:01.289000Z"
            },
            {
                "empty_slots": 4,
                "extra": {
                    "address": null,
                    "last_updated": 1497802099,
                    "renting": 1,
                    "returning": 1,
                    "uid": "59"
                },
                "free_bikes": 11,
                "id": "2e4406867a3574184b0d6be7ede11d38",
                "latitude": 42.351356,
                "longitude": -71.059367,
                "name": "Chinatown Gate Plaza",
                "timestamp": "2017-06-18T16:33:01.143000Z"
            },
            {
                "empty_slots": 31,
                "extra": {
                    "address": null,
                    "last_updated": 1497803168,
                    "renting": 1,
                    "returning": 1,
                    "uid": "22"
                },
                "free_bikes": 13,
                "id": "68dd25824f76cc3063f5120e674bfed9",
                "latitude": 42.352175,
                "longitude": -71.055547,
                "name": "South Station - 700 Atlantic Ave",
                "timestamp": "2017-06-18T16:33:01.120000Z"
            },
            {
                "empty_slots": 2,
                "extra": {
                    "address": null,
                    "last_updated": 1497803331,
                    "renting": 1,
                    "returning": 1,
                    "uid": "43"
                },
                "free_bikes": 13,
                "id": "2cce02b482530e0086ad9f529fe48c2b",
                "latitude": 42.357143,
                "longitude": -71.050699,
                "name": "Rowes Wharf at Atlantic Ave",
                "timestamp": "2017-06-18T16:33:01.294000Z"
            },
            {
                "empty_slots": 27,
                "extra": {
                    "address": null,
                    "last_updated": 1497803517,
                    "renting": 1,
                    "returning": 1,
                    "uid": "190"
                },
                "free_bikes": 9,
                "id": "2601ac8e4decf87d75d824fa7e47b9a5",
                "latitude": 42.365673,
                "longitude": -71.064263,
                "name": "Nashua Street at Red Auerbach Way",
                "timestamp": "2017-06-18T16:33:01.163000Z"
            },
            {
                "empty_slots": 4,
                "extra": {
                    "address": null,
                    "last_updated": 1497803073,
                    "renting": 1,
                    "returning": 1,
                    "uid": "21"
                },
                "free_bikes": 20,
                "id": "c1ae903b130ca84ef5cb84caa16234db",
                "latitude": 42.345959,
                "longitude": -71.082578,
                "name": "Prudential Center - Belvedere St",
                "timestamp": "2017-06-18T16:33:01.119000Z"
            },
            {
                "empty_slots": 6,
                "extra": {
                    "address": null,
                    "last_updated": 1497803409,
                    "renting": 1,
                    "returning": 1,
                    "uid": "16"
                },
                "free_bikes": 12,
                "id": "3c1cde4f3197b2599cc6140dc1ea4a80",
                "latitude": 42.34807412317439,
                "longitude": -71.07657015323639,
                "name": "Back Bay T Stop - Dartmouth St at Stuart St",
                "timestamp": "2017-06-18T16:33:01.269000Z"
            },
            {
                "empty_slots": 12,
                "extra": {
                    "address": null,
                    "last_updated": 1497803250,
                    "renting": 1,
                    "returning": 1,
                    "uid": "29"
                },
                "free_bikes": 3,
                "id": "9153d52f686a63bde64a0bd74574e4e2",
                "latitude": 42.363732,
                "longitude": -71.124565,
                "name": "Innovation Lab - 125 Western Ave at Batten Way",
                "timestamp": "2017-06-18T16:33:01.123000Z"
            },
            {
                "empty_slots": 18,
                "extra": {
                    "address": null,
                    "last_updated": 1497802401,
                    "renting": 1,
                    "returning": 1,
                    "uid": "149"
                },
                "free_bikes": 0,
                "id": "ded434853a62ec9703f2484cca685c20",
                "latitude": 42.363796,
                "longitude": -71.129164,
                "name": "175 N Harvard St",
                "timestamp": "2017-06-18T16:33:01.312000Z"
            },
            {
                "empty_slots": 14,
                "extra": {
                    "address": null,
                    "last_updated": 1497803159,
                    "renting": 1,
                    "returning": 1,
                    "uid": "41"
                },
                "free_bikes": 3,
                "id": "43b6ca106693a73e04b23890e713ea24",
                "latitude": 42.352261,
                "longitude": -71.123831,
                "name": "Packard's Corner - Commonwealth Ave at Brighton Ave",
                "timestamp": "2017-06-18T16:33:01.296000Z"
            },
            {
                "empty_slots": 12,
                "extra": {
                    "address": null,
                    "last_updated": 1497795767,
                    "renting": 1,
                    "returning": 1,
                    "uid": "169"
                },
                "free_bikes": 3,
                "id": "f10d6a600af972c6b5d7953c49d5c654",
                "latitude": 42.378965,
                "longitude": -71.068607,
                "name": "Edwards Playground - Main St at Eden St",
                "timestamp": "2017-06-18T16:33:01.246000Z"
            },
            {
                "empty_slots": 12,
                "extra": {
                    "address": null,
                    "last_updated": 1497803548,
                    "renting": 1,
                    "returning": 1,
                    "uid": "98"
                },
                "free_bikes": 5,
                "id": "a0fa77069d080a45d5e9290af54e9f46",
                "latitude": 42.371848,
                "longitude": -71.060292,
                "name": "Warren St at Chelsea St",
                "timestamp": "2017-06-18T16:33:01.245000Z"
            },
            {
                "empty_slots": 14,
                "extra": {
                    "address": null,
                    "last_updated": 1497803494,
                    "renting": 1,
                    "returning": 1,
                    "uid": "47"
                },
                "free_bikes": 4,
                "id": "4bf16679e6286a5cb72c1ae4526a3107",
                "latitude": 42.362811,
                "longitude": -71.056067,
                "name": "Cross St at Hanover St",
                "timestamp": "2017-06-18T16:33:01.288000Z"
            },
            {
                "empty_slots": 10,
                "extra": {
                    "address": null,
                    "last_updated": 1497801527,
                    "renting": 1,
                    "returning": 1,
                    "uid": "161"
                },
                "free_bikes": 8,
                "id": "be6410ffefa71e9a6282fa1fdef1bf72",
                "latitude": 42.3391085,
                "longitude": -71.0514432,
                "name": "W Broadway at D St",
                "timestamp": "2017-06-18T16:33:01.124000Z"
            },
            {
                "empty_slots": 11,
                "extra": {
                    "address": null,
                    "last_updated": 1497801775,
                    "renting": 1,
                    "returning": 1,
                    "uid": "4"
                },
                "free_bikes": 4,
                "id": "923c9498bf653bce81b9f5bf06f9c499",
                "latitude": 42.345392,
                "longitude": -71.069616,
                "name": "Tremont St at E Berkeley St",
                "timestamp": "2017-06-18T16:33:01.126000Z"
            },
            {
                "empty_slots": 7,
                "extra": {
                    "address": null,
                    "last_updated": 1497798734,
                    "renting": 1,
                    "returning": 1,
                    "uid": "49"
                },
                "free_bikes": 7,
                "id": "1714951f74f4b116e42fc312dffa3be9",
                "latitude": 42.351146,
                "longitude": -71.066289,
                "name": "Stuart St at Charles St",
                "timestamp": "2017-06-18T16:33:01.285000Z"
            },
            {
                "empty_slots": 10,
                "extra": {
                    "address": null,
                    "last_updated": 1497802670,
                    "renting": 1,
                    "returning": 1,
                    "uid": "133"
                },
                "free_bikes": 5,
                "id": "68fc84a359655b54175ddc443e79003b",
                "latitude": 42.310579,
                "longitude": -71.107341,
                "name": "Green Street T Stop - Green St at Amory St",
                "timestamp": "2017-06-18T16:33:01.100000Z"
            },
            {
                "empty_slots": 8,
                "extra": {
                    "address": null,
                    "last_updated": 1497776540,
                    "renting": 1,
                    "returning": 1,
                    "uid": "170"
                },
                "free_bikes": 6,
                "id": "3d5ed4d9f089974d5d0f0fc19ad17d9c",
                "latitude": 42.303469,
                "longitude": -71.085347,
                "name": "Franklin Park Zoo - Franklin Park Rd at Blue Hill Ave",
                "timestamp": "2017-06-18T16:33:01.227000Z"
            },
            {
                "empty_slots": 5,
                "extra": {
                    "address": null,
                    "last_updated": 1497802575,
                    "renting": 1,
                    "returning": 1,
                    "uid": "11"
                },
                "free_bikes": 10,
                "id": "eb276799b6ebc22ee82f33566eb778b7",
                "latitude": 42.338629,
                "longitude": -71.1065,
                "name": "Longwood Ave at Binney St",
                "timestamp": "2017-06-18T16:33:01.259000Z"
            },
            {
                "empty_slots": 4,
                "extra": {
                    "address": null,
                    "last_updated": 1497530379,
                    "renting": 0,
                    "returning": 0,
                    "uid": "119"
                },
                "free_bikes": 0,
                "id": "8414286d3232109891e1a2dfe396a59e",
                "latitude": 42.335741,
                "longitude": -71.03877,
                "name": "South Boston Library - 646 E Broadway",
                "timestamp": "2017-06-18T16:33:01.179000Z"
            },
            {
                "empty_slots": 11,
                "extra": {
                    "address": null,
                    "last_updated": 1497802342,
                    "renting": 1,
                    "returning": 1,
                    "uid": "146"
                },
                "free_bikes": 7,
                "id": "0b0ef90ed68e023d65ed3b1c57eb6d36",
                "latitude": 42.336448,
                "longitude": -71.023739,
                "name": "Murphy Skating Rink - 1880 Day Blvd",
                "timestamp": "2017-06-18T16:33:01.300000Z"
            },
            {
                "empty_slots": 6,
                "extra": {
                    "address": null,
                    "last_updated": 1497803095,
                    "renting": 1,
                    "returning": 1,
                    "uid": "203"
                },
                "free_bikes": 7,
                "id": "c2561905a4f6fad8c8bee1043bde9a6c",
                "latitude": 42.309572,
                "longitude": -71.0729,
                "name": "Columbia Rd at Ceylon St",
                "timestamp": "2017-06-18T16:33:01.302000Z"
            },
            {
                "empty_slots": 14,
                "extra": {
                    "address": null,
                    "last_updated": 1497801265,
                    "renting": 1,
                    "returning": 1,
                    "uid": "8"
                },
                "free_bikes": 0,
                "id": "1c69a2302d6c2221cd6057a3f97fc548",
                "latitude": 42.353334,
                "longitude": -71.137313,
                "name": "Union Square - Brighton Ave at Cambridge St",
                "timestamp": "2017-06-18T16:33:01.127000Z"
            },
            {
                "empty_slots": 10,
                "extra": {
                    "address": null,
                    "last_updated": 1497803294,
                    "renting": 1,
                    "returning": 1,
                    "uid": "81"
                },
                "free_bikes": 4,
                "id": "a35b80134814b7fd4592404b8ddb2a24",
                "latitude": 42.352409,
                "longitude": -71.062679,
                "name": "Boylston St at Washington St",
                "timestamp": "2017-06-18T16:33:01.178000Z"
            },
            {
                "empty_slots": 6,
                "extra": {
                    "address": null,
                    "last_updated": 1497801906,
                    "renting": 1,
                    "returning": 1,
                    "uid": "54"
                },
                "free_bikes": 7,
                "id": "0670eb9d5937bfea133bd73ff534c764",
                "latitude": 42.354979,
                "longitude": -71.063348,
                "name": "Tremont St at West St",
                "timestamp": "2017-06-18T16:33:01.147000Z"
            },
            {
                "empty_slots": 12,
                "extra": {
                    "address": null,
                    "last_updated": 1497621671,
                    "renting": 1,
                    "returning": 1,
                    "uid": "175"
                },
                "free_bikes": 5,
                "id": "b0f4189efee3fe8e880bfffcabfff93c",
                "latitude": 42.34894857235593,
                "longitude": -71.15027189254761,
                "name": "Brighton Center - Washington St at Cambridge St",
                "timestamp": "2017-06-18T16:33:01.221000Z"
            },
            {
                "empty_slots": 6,
                "extra": {
                    "address": null,
                    "last_updated": 1497776491,
                    "renting": 1,
                    "returning": 1,
                    "uid": "217"
                },
                "free_bikes": 13,
                "id": "553ed0300d38108b4f21a6bafa3db70c",
                "latitude": 42.386781,
                "longitude": -71.006098,
                "name": "Orient Heights T Stop - Bennington St at Saratoga St",
                "timestamp": "2017-06-18T16:33:01.086000Z"
            },
            {
                "empty_slots": 14,
                "extra": {
                    "address": null,
                    "last_updated": 1497776472,
                    "renting": 1,
                    "returning": 1,
                    "uid": "214"
                },
                "free_bikes": 1,
                "id": "63980598720f0bf1e318817f1be29afb",
                "latitude": 42.375339,
                "longitude": -71.031304,
                "name": "Airport T Stop - Bremen St at Brooks St",
                "timestamp": "2017-06-18T16:33:01.088000Z"
            },
            {
                "empty_slots": 4,
                "extra": {
                    "address": null,
                    "last_updated": 1497803107,
                    "renting": 1,
                    "returning": 1,
                    "uid": "124"
                },
                "free_bikes": 11,
                "id": "de412fd4ed57348bf9ec6bd7339b04f6",
                "latitude": 42.309054,
                "longitude": -71.11543,
                "name": "Curtis Hall - South St at Centre St",
                "timestamp": "2017-06-18T16:33:01.132000Z"
            },
            {
                "empty_slots": 13,
                "extra": {
                    "address": null,
                    "last_updated": 1497787476,
                    "renting": 1,
                    "returning": 1,
                    "uid": "135"
                },
                "free_bikes": 3,
                "id": "997d209a53d13471372a1145c32d663a",
                "latitude": 42.344827,
                "longitude": -71.028664,
                "name": "ID Building East",
                "timestamp": "2017-06-18T16:33:01.107000Z"
            },
            {
                "empty_slots": 15,
                "extra": {
                    "address": null,
                    "last_updated": 1497776550,
                    "renting": 1,
                    "returning": 1,
                    "uid": "213"
                },
                "free_bikes": 1,
                "id": "d9c7ef5dbda4ed944d1bf51fe540acb6",
                "latitude": 42.369536,
                "longitude": -71.039431,
                "name": "East Boston Neighborhood Health Center - 20 Maverick Square",
                "timestamp": "2017-06-18T16:33:01.092000Z"
            },
            {
                "empty_slots": 9,
                "extra": {
                    "address": null,
                    "last_updated": 1497802865,
                    "renting": 1,
                    "returning": 1,
                    "uid": "48"
                },
                "free_bikes": 10,
                "id": "feec0fa4c8ef432dd873e53115aaa7e9",
                "latitude": 42.356755,
                "longitude": -71.055407,
                "name": "Post Office Square - Pearl St at Milk St",
                "timestamp": "2017-06-18T16:33:01.283000Z"
            },
            {
                "empty_slots": 10,
                "extra": {
                    "address": null,
                    "last_updated": 1497803435,
                    "renting": 1,
                    "returning": 1,
                    "uid": "120"
                },
                "free_bikes": 5,
                "id": "89b265da9780207db64adb0b1a43a2c6",
                "latitude": 42.356052,
                "longitude": -71.069849,
                "name": "Charles st and Beacon St",
                "timestamp": "2017-06-18T16:33:01.129000Z"
            },
            {
                "empty_slots": 5,
                "extra": {
                    "address": null,
                    "last_updated": 1497803280,
                    "renting": 1,
                    "returning": 1,
                    "uid": "26"
                },
                "free_bikes": 9,
                "id": "e56b6d877c8dfe81cafd06ca3a7eff71",
                "latitude": 42.341522,
                "longitude": -71.068922,
                "name": "Washington St at Waltham St",
                "timestamp": "2017-06-18T16:33:01.116000Z"
            },
            {
                "empty_slots": 9,
                "extra": {
                    "address": null,
                    "last_updated": 1497776556,
                    "renting": 1,
                    "returning": 1,
                    "uid": "128"
                },
                "free_bikes": 10,
                "id": "562b27a16779c09377a90b59136b8a85",
                "latitude": 42.320561,
                "longitude": -71.06198,
                "name": "E Cottage St at Columbia Rd",
                "timestamp": "2017-06-18T16:33:01.137000Z"
            },
            {
                "empty_slots": 9,
                "extra": {
                    "address": null,
                    "last_updated": 1497800029,
                    "renting": 1,
                    "returning": 1,
                    "uid": "122"
                },
                "free_bikes": 6,
                "id": "134d7392f7c21ba561437058296d6928",
                "latitude": 42.345733,
                "longitude": -71.100694,
                "name": "Burlington Ave at Brookline Ave",
                "timestamp": "2017-06-18T16:33:01.131000Z"
            },
            {
                "empty_slots": 10,
                "extra": {
                    "address": null,
                    "last_updated": 1497793079,
                    "renting": 1,
                    "returning": 1,
                    "uid": "204"
                },
                "free_bikes": 5,
                "id": "c432d994e87baa306e85e8a27d38ce87",
                "latitude": 42.324081,
                "longitude": -71.083235,
                "name": "Walnut Ave at Warren St",
                "timestamp": "2017-06-18T16:33:01.275000Z"
            },
            {
                "empty_slots": 13,
                "extra": {
                    "address": null,
                    "last_updated": 1497802461,
                    "renting": 1,
                    "returning": 1,
                    "uid": "78"
                },
                "free_bikes": 6,
                "id": "669dfa375fcd4c6eead89ea6b89f6199",
                "latitude": 42.379637,
                "longitude": -71.095319,
                "name": "Union Square - Somerville",
                "timestamp": "2017-06-18T16:33:01.325000Z"
            },
            {
                "empty_slots": 14,
                "extra": {
                    "address": null,
                    "last_updated": 1497798609,
                    "renting": 1,
                    "returning": 1,
                    "uid": "71"
                },
                "free_bikes": 1,
                "id": "6dbd6e946d3f4a22eda526eae1877257",
                "latitude": 42.383405,
                "longitude": -71.107593,
                "name": "Conway Park - Somerville Avenue",
                "timestamp": "2017-06-18T16:33:01.322000Z"
            },
            {
                "empty_slots": 12,
                "extra": {
                    "address": null,
                    "last_updated": 1497803403,
                    "renting": 1,
                    "returning": 1,
                    "uid": "99"
                },
                "free_bikes": 2,
                "id": "600ca9bf59409d83f15862a1c0dfe4b0",
                "latitude": 42.385582,
                "longitude": -71.113341,
                "name": "Wilson Square",
                "timestamp": "2017-06-18T16:33:01.243000Z"
            },
            {
                "empty_slots": 14,
                "extra": {
                    "address": null,
                    "last_updated": 1497803029,
                    "renting": 1,
                    "returning": 1,
                    "uid": "100"
                },
                "free_bikes": 11,
                "id": "8826fb6a8e69e2fd45f22d8ee1c1a8de",
                "latitude": 42.396969,
                "longitude": -71.123024,
                "name": "Davis Square",
                "timestamp": "2017-06-18T16:33:01.192000Z"
            },
            {
                "empty_slots": 11,
                "extra": {
                    "address": null,
                    "last_updated": 1497791363,
                    "renting": 1,
                    "returning": 1,
                    "uid": "194"
                },
                "free_bikes": 3,
                "id": "7834292992b37578067b345232346bad",
                "latitude": 42.386141411639564,
                "longitude": -71.07828140258789,
                "name": "Broadway St at Mt Pleasant St",
                "timestamp": "2017-06-18T16:33:01.160000Z"
            },
            {
                "empty_slots": 11,
                "extra": {
                    "address": null,
                    "last_updated": 1497803054,
                    "renting": 1,
                    "returning": 1,
                    "uid": "79"
                },
                "free_bikes": 3,
                "id": "0559164ae244ded879b0a74d8c122a77",
                "latitude": 42.37842,
                "longitude": -71.105668,
                "name": "Beacon St at Washington / Kirkland",
                "timestamp": "2017-06-18T16:33:01.324000Z"
            },
            {
                "empty_slots": 11,
                "extra": {
                    "address": null,
                    "last_updated": 1497802366,
                    "renting": 1,
                    "returning": 1,
                    "uid": "17"
                },
                "free_bikes": 2,
                "id": "904b7113d7e610919a5336c1167674e2",
                "latitude": 42.365064,
                "longitude": -71.119233,
                "name": "Soldiers Field Park - 111 Western Ave",
                "timestamp": "2017-06-18T16:33:01.268000Z"
            },
            {
                "empty_slots": 16,
                "extra": {
                    "address": null,
                    "last_updated": 1497802293,
                    "renting": 1,
                    "returning": 1,
                    "uid": "129"
                },
                "free_bikes": 3,
                "id": "584e8e6d0342d4247ab252e3afe8f825",
                "latitude": 42.377022,
                "longitude": -71.056605,
                "name": "Hayes Square - Vine St at Moulton St",
                "timestamp": "2017-06-18T16:33:01.139000Z"
            },
            {
                "empty_slots": 5,
                "extra": {
                    "address": null,
                    "last_updated": 1497776553,
                    "renting": 1,
                    "returning": 1,
                    "uid": "130"
                },
                "free_bikes": 10,
                "id": "0f6609e2ae7894f8e9060eeddae75a2d",
                "latitude": 42.317283,
                "longitude": -71.065363,
                "name": "Upham's Corner",
                "timestamp": "2017-06-18T16:33:01.103000Z"
            },
            {
                "empty_slots": 9,
                "extra": {
                    "address": null,
                    "last_updated": 1497802478,
                    "renting": 1,
                    "returning": 1,
                    "uid": "55"
                },
                "free_bikes": 6,
                "id": "83be7439d7dded268547cf574f6c7f2c",
                "latitude": 42.347265,
                "longitude": -71.088088,
                "name": "Boylston St at Massachusetts Ave",
                "timestamp": "2017-06-18T16:33:01.145000Z"
            },
            {
                "empty_slots": 17,
                "extra": {
                    "address": null,
                    "last_updated": 1497801741,
                    "renting": 1,
                    "returning": 1,
                    "uid": "61"
                },
                "free_bikes": 1,
                "id": "2e695161edc1016ad67f7c766e6a197d",
                "latitude": 42.348762,
                "longitude": -71.082383,
                "name": "Boylston St at Fairfield St",
                "timestamp": "2017-06-18T16:33:01.210000Z"
            },
            {
                "empty_slots": 17,
                "extra": {
                    "address": null,
                    "last_updated": 1497803371,
                    "renting": 1,
                    "returning": 1,
                    "uid": "36"
                },
                "free_bikes": 7,
                "id": "a7216c0e6bf1375d25b6f104a714d44c",
                "latitude": 42.34976701008725,
                "longitude": -71.07732653617859,
                "name": "Copley Square - Dartmouth St at Boylston St",
                "timestamp": "2017-06-18T16:33:01.204000Z"
            },
            {
                "empty_slots": 9,
                "extra": {
                    "address": null,
                    "last_updated": 1497803305,
                    "renting": 1,
                    "returning": 1,
                    "uid": "218"
                },
                "free_bikes": 6,
                "id": "2893854c4c64eb00b7cbac5381c3e6c5",
                "latitude": 42.351586001198456,
                "longitude": -71.04569256305693,
                "name": "Watermark Seaport - Boston Wharf Rd at Seaport Blvd",
                "timestamp": "2017-06-18T16:33:01.097000Z"
            },
            {
                "empty_slots": 11,
                "extra": {
                    "address": null,
                    "last_updated": 1497800939,
                    "renting": 1,
                    "returning": 1,
                    "uid": "7"
                },
                "free_bikes": 4,
                "id": "94e2b48b7d791cb4edceb257f77d0553",
                "latitude": 42.352940802392325,
                "longitude": -71.04388475418091,
                "name": "Fan Pier",
                "timestamp": "2017-06-18T16:33:01.185000Z"
            },
            {
                "empty_slots": 14,
                "extra": {
                    "address": null,
                    "last_updated": 1497803129,
                    "renting": 1,
                    "returning": 1,
                    "uid": "66"
                },
                "free_bikes": 0,
                "id": "21e1a962fe9d1685fd283faa3c3fb30b",
                "latitude": 42.34852014581272,
                "longitude": -71.13394662737846,
                "name": "Allston Green District - Griggs St at Commonwealth Ave",
                "timestamp": "2017-06-18T16:33:01.216000Z"
            },
            {
                "empty_slots": 8,
                "extra": {
                    "address": null,
                    "last_updated": 1497803426,
                    "renting": 1,
                    "returning": 1,
                    "uid": "211"
                },
                "free_bikes": 11,
                "id": "66576a901b33431b167da0141c293dc5",
                "latitude": 42.365431546274806,
                "longitude": -71.03625655174255,
                "name": "Piers Park",
                "timestamp": "2017-06-18T16:33:01.095000Z"
            },
            {
                "empty_slots": 15,
                "extra": {
                    "address": null,
                    "last_updated": 1497803552,
                    "renting": 1,
                    "returning": 1,
                    "uid": "212"
                },
                "free_bikes": 16,
                "id": "93542dcbf21f5411569adb92cd7cc199",
                "latitude": 42.368844082898356,
                "longitude": -71.03977829217911,
                "name": "Maverick Square - Lewis Mall",
                "timestamp": "2017-06-18T16:33:01.091000Z"
            },
            {
                "empty_slots": 11,
                "extra": {
                    "address": null,
                    "last_updated": 1497800720,
                    "renting": 1,
                    "returning": 1,
                    "uid": "12"
                },
                "free_bikes": 3,
                "id": "47ad8148bcc3595bece9524a17d78018",
                "latitude": 42.33628239812956,
                "longitude": -71.08801916241646,
                "name": "Ruggles T Stop - Columbus Ave at Melnea Cass Blvd",
                "timestamp": "2017-06-18T16:33:01.263000Z"
            },
            {
                "empty_slots": 14,
                "extra": {
                    "address": null,
                    "last_updated": 1497794892,
                    "renting": 1,
                    "returning": 1,
                    "uid": "216"
                },
                "free_bikes": 5,
                "id": "c01275ef8ceddd3df7f7d1b93326a90b",
                "latitude": 42.38240377674137,
                "longitude": -71.03024303913116,
                "name": "Glendon St at Condor St",
                "timestamp": "2017-06-18T16:33:01.082000Z"
            },
            {
                "empty_slots": 9,
                "extra": {
                    "address": null,
                    "last_updated": 1497796045,
                    "renting": 1,
                    "returning": 1,
                    "uid": "219"
                },
                "free_bikes": 10,
                "id": "2743ef861ea179516fce8114a16965ec",
                "latitude": 42.37430732260765,
                "longitude": -71.03807777166365,
                "name": "Central Square - East Boston",
                "timestamp": "2017-06-18T16:33:01.099000Z"
            },
            {
                "empty_slots": 11,
                "extra": {
                    "address": null,
                    "last_updated": 1497803314,
                    "renting": 1,
                    "returning": 1,
                    "uid": "14"
                },
                "free_bikes": 6,
                "id": "d0ff6538806a4e5c46aa7e95f3fa47ce",
                "latitude": 42.3374174845973,
                "longitude": -71.10286116600037,
                "name": "HMS/HSPH - Avenue Louis Pasteur at Longwood Ave",
                "timestamp": "2017-06-18T16:33:01.266000Z"
            },
            {
                "empty_slots": 6,
                "extra": {
                    "address": null,
                    "last_updated": 1497802743,
                    "renting": 1,
                    "returning": 1,
                    "uid": "20"
                },
                "free_bikes": 11,
                "id": "9c85a06bb914c9897dda64fc412498c4",
                "latitude": 42.35991176110118,
                "longitude": -71.0514298081398,
                "name": "Aquarium T Stop - 200 Atlantic Ave",
                "timestamp": "2017-06-18T16:33:01.118000Z"
            },
            {
                "empty_slots": 17,
                "extra": {
                    "address": null,
                    "last_updated": 1497800231,
                    "renting": 1,
                    "returning": 1,
                    "uid": "45"
                },
                "free_bikes": 2,
                "id": "379ecb57bce43ca9a8e768604b7573e6",
                "latitude": 42.3446808403874,
                "longitude": -71.09785348176956,
                "name": "Yawkey Way at Boylston St.",
                "timestamp": "2017-06-18T16:33:01.291000Z"
            },
            {
                "empty_slots": 8,
                "extra": {
                    "address": null,
                    "last_updated": 1497802901,
                    "renting": 1,
                    "returning": 1,
                    "uid": "30"
                },
                "free_bikes": 7,
                "id": "86690a519e796d2ccb852ae628ce5da3",
                "latitude": 42.33439781194515,
                "longitude": -71.10507935285568,
                "name": "Brigham Circle - Francis St at Huntington Ave",
                "timestamp": "2017-06-18T16:33:01.202000Z"
            },
            {
                "empty_slots": 15,
                "extra": {
                    "address": null,
                    "last_updated": 1497803235,
                    "renting": 1,
                    "returning": 1,
                    "uid": "53"
                },
                "free_bikes": 3,
                "id": "e1b2c5d0d86576245fc27abe7b5f117a",
                "latitude": 42.35082680669095,
                "longitude": -71.0898108780384,
                "name": "Beacon St at Massachusetts Ave",
                "timestamp": "2017-06-18T16:33:01.153000Z"
            },
            {
                "empty_slots": 9,
                "extra": {
                    "address": null,
                    "last_updated": 1497777143,
                    "renting": 1,
                    "returning": 1,
                    "uid": "205"
                },
                "free_bikes": 6,
                "id": "aa2cadce93985cabcc8c1701a5c8be20",
                "latitude": 42.30785224238503,
                "longitude": -71.06512248516083,
                "name": "Bowdoin St at Quincy St",
                "timestamp": "2017-06-18T16:33:01.176000Z"
            },
            {
                "empty_slots": 11,
                "extra": {
                    "address": null,
                    "last_updated": 1497801510,
                    "renting": 1,
                    "returning": 1,
                    "uid": "63"
                },
                "free_bikes": 4,
                "id": "f835af662d1afc1ee1ae8ccfbab70aee",
                "latitude": 42.344040510016356,
                "longitude": -71.05737626552582,
                "name": "Dorchester Ave at Gillette Park",
                "timestamp": "2017-06-18T16:33:01.212000Z"
            },
            {
                "empty_slots": 11,
                "extra": {
                    "address": null,
                    "last_updated": 1497802678,
                    "renting": 1,
                    "returning": 1,
                    "uid": "64"
                },
                "free_bikes": 8,
                "id": "d3b31cb8873c062a7b7cd952cd2ca8c3",
                "latitude": 42.351004495946704,
                "longitude": -71.04930013418198,
                "name": "Congress St at Sleeper St",
                "timestamp": "2017-06-18T16:33:01.214000Z"
            },
            {
                "empty_slots": 3,
                "extra": {
                    "address": null,
                    "last_updated": 1497776523,
                    "renting": 1,
                    "returning": 1,
                    "uid": "93"
                },
                "free_bikes": 11,
                "id": "9f6fae7b1b3a673377b452474ca2bcf1",
                "latitude": 42.32033973515723,
                "longitude": -71.05118036270142,
                "name": "JFK/UMass T Stop",
                "timestamp": "2017-06-18T16:33:01.250000Z"
            },
            {
                "empty_slots": 11,
                "extra": {
                    "address": null,
                    "last_updated": 1497776466,
                    "renting": 1,
                    "returning": 1,
                    "uid": "37"
                },
                "free_bikes": 3,
                "id": "fa4feed48aece06cb19271e25dd799f3",
                "latitude": 42.35732921867706,
                "longitude": -71.14673539996147,
                "name": "New Balance - 20 Guest St",
                "timestamp": "2017-06-18T16:33:01.203000Z"
            },
            {
                "empty_slots": 7,
                "extra": {
                    "address": null,
                    "last_updated": 1497803318,
                    "renting": 1,
                    "returning": 1,
                    "uid": "50"
                },
                "free_bikes": 8,
                "id": "878d4eee7eb6ae036df106153075ef88",
                "latitude": 42.3511419825475,
                "longitude": -71.07329249382019,
                "name": "Boylston St at Berkeley St",
                "timestamp": "2017-06-18T16:33:01.152000Z"
            },
            {
                "empty_slots": 6,
                "extra": {
                    "address": null,
                    "last_updated": 1497803397,
                    "renting": 1,
                    "returning": 1,
                    "uid": "58"
                },
                "free_bikes": 9,
                "id": "56d2eb86c21c57692225ee5f13e31818",
                "latitude": 42.35554932336134,
                "longitude": -71.07284188270569,
                "name": "Beacon St at Arlington St",
                "timestamp": "2017-06-18T16:33:01.144000Z"
            },
            {
                "empty_slots": 1,
                "extra": {
                    "address": null,
                    "last_updated": 1497803030,
                    "renting": 1,
                    "returning": 1,
                    "uid": "60"
                },
                "free_bikes": 14,
                "id": "c67028f96414c2193ec41f382705eb4c",
                "latitude": 42.36071444836764,
                "longitude": -71.07092812657356,
                "name": "Charles Circle - Charles St at Cambridge St",
                "timestamp": "2017-06-18T16:33:01.209000Z"
            },
            {
                "empty_slots": 18,
                "extra": {
                    "address": null,
                    "last_updated": 1497776497,
                    "renting": 1,
                    "returning": 1,
                    "uid": "109"
                },
                "free_bikes": 17,
                "id": "9e6a8c665def7b9475f618f73bf16e2e",
                "latitude": 42.36590788445084,
                "longitude": -71.06446668505669,
                "name": "TD Garden - West End Park",
                "timestamp": "2017-06-18T16:33:01.188000Z"
            },
            {
                "empty_slots": 14,
                "extra": {
                    "address": null,
                    "last_updated": 1497799280,
                    "renting": 1,
                    "returning": 1,
                    "uid": "174"
                },
                "free_bikes": 1,
                "id": "66d0f515f619b404c689211df256024f",
                "latitude": 42.3489528466951,
                "longitude": -71.16031676530838,
                "name": "Washington St at Brock St",
                "timestamp": "2017-06-18T16:33:01.222000Z"
            },
            {
                "empty_slots": 14,
                "extra": {
                    "address": null,
                    "last_updated": 1497801911,
                    "renting": 1,
                    "returning": 1,
                    "uid": "182"
                },
                "free_bikes": 5,
                "id": "bf75e5d4343945db9675efcc60d1bf12",
                "latitude": 42.36769018024484,
                "longitude": -71.07116281986237,
                "name": "Museum of Science",
                "timestamp": "2017-06-18T16:33:01.228000Z"
            },
            {
                "empty_slots": 13,
                "extra": {
                    "address": null,
                    "last_updated": 1497800472,
                    "renting": 1,
                    "returning": 1,
                    "uid": "82"
                },
                "free_bikes": 2,
                "id": "2a2df9eceba1840144986e778504dcde",
                "latitude": 42.339335,
                "longitude": -71.13493,
                "name": "Washington Square at Washington St. / Beacon St.",
                "timestamp": "2017-06-18T16:33:01.175000Z"
            },
            {
                "empty_slots": 11,
                "extra": {
                    "address": null,
                    "last_updated": 1497797710,
                    "renting": 1,
                    "returning": 1,
                    "uid": "112"
                },
                "free_bikes": 4,
                "id": "3f002b9808de30c28132f3cde02667be",
                "latitude": 42.406302,
                "longitude": -71.132446,
                "name": "Clarendon Hill at Broadway",
                "timestamp": "2017-06-18T16:33:01.174000Z"
            },
            {
                "empty_slots": 12,
                "extra": {
                    "address": null,
                    "last_updated": 1497802102,
                    "renting": 1,
                    "returning": 1,
                    "uid": "57"
                },
                "free_bikes": 0,
                "id": "24a3f0ab2a83ab70ebe4bf0110cc890f",
                "latitude": 42.340542615516355,
                "longitude": -71.08138847914233,
                "name": "Columbus Ave at Massachusetts Ave",
                "timestamp": "2017-06-18T16:33:01.148000Z"
            },
            {
                "empty_slots": 9,
                "extra": {
                    "address": null,
                    "last_updated": 1497800004,
                    "renting": 1,
                    "returning": 1,
                    "uid": "92"
                },
                "free_bikes": 10,
                "id": "db674ff3758d0911cdadd98f6f39f1a0",
                "latitude": 42.314507,
                "longitude": -71.041269,
                "name": "University of Massachusetts Boston - Integrated Sciences Complex",
                "timestamp": "2017-06-18T16:33:01.252000Z"
            },
            {
                "empty_slots": 10,
                "extra": {
                    "address": null,
                    "last_updated": 1497803570,
                    "renting": 1,
                    "returning": 1,
                    "uid": "40"
                },
                "free_bikes": 5,
                "id": "d27a92570184af7220c3130dace0e347",
                "latitude": 42.363871,
                "longitude": -71.050877,
                "name": "Lewis Wharf at Atlantic Ave",
                "timestamp": "2017-06-18T16:33:01.295000Z"
            }
        ]
    
}
}