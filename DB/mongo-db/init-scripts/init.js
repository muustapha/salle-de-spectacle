db = connect('mongodb://127.0.0.1:27017/salles');

db.salles.insertMany(
    [{
        "_id": 1,
        "nom": null,
        "adresse": null,
        "styles": null,
        "avis": null,
        "capacite": null,
        "smac": null,
        "contact": null,
        "isDelete": true
    },
    {
        "_id": 2,
        "nom": "Paloma",
        "adresse": {
            "numero": 250,
            "voie": "Chemin de l'Aérodrome",
            "codePostal": "30000",
            "ville": "Nîmes",
            "localisation": {
                "type": "Point",
                "coordinates": [
                    43.85643,
                    4.405415
                ]
            }
        },
        "avis": [
            {
                "date": new ISODate("2019-07-06T00:00:00.000Z"),
                "note": 10
            }
        ],
        "capacite": 4250,
        "smac": true,
        "styles": [
            "jazz"
        ]
    },
    {
        "_id": 3,
        "nom": "Sonograf",
        "adresse": {
            "voie": "D901",
            "codePostal": "84250",
            "ville": "Le Thor",
            "localisation": {
                "type": "Point",
                "coordinates": [
                    43.923005,
                    5.020077
                ]
            }
        },
        "capacite": 300,
        "styles": [
            "blues",
            "rock",
            "jazz",
            "techno",
            "reggae"
        ]
    }]
)

db.users.insertMany(
    [{
        "_id": ObjectId("65afc6261a0215cbabee5720"),
        "pseudo": "Admin1",
        "mail": "a@admin.com",
        "password": "ClmwXu9/l+sTgvhTh/otSnBn3FWLNpmTM4hHlJrm6BGcU4Rm",
        "isAdmin": true
    },
    {
        "_id": ObjectId("65b0e2cb07672cbc6e23f6ad"),
        "pseudo": "nonadmin",
        "mail": "ok@mail.com",
        "password": "OhGvjEIgRpU5kMvA2YxUP7VtoLzXTWJu2XH24/Dq//GJOTFR",
        "isAdmin": false
    }]
)

db.styles.insertMany(
    [{
        "types": [
            "blues",
            "rock",
            "jazz",
            "techno",
            "reggae",
            "metal",
            "eurobeat",
            "electro"
        ]
    }
    ]
)

db.events.insertMany(
    [{
        "_id": ObjectId("65af9ea41a0215cbabee5711"),
        "idSalle": 0,
        "artiste": "string",
        "prix": 0,
        "style": "string",
        "date": new ISODate("2024-01-23T10:34:45.165Z")
    },
    {
        "_id": ObjectId("65afb4b91a0215cbabee5712"),
        "idSalle": 0,
        "artiste": "jggf",
        "prix": 53656,
        "style": "Jazz",
        "date": new ISODate("2024-01-04T23:00:00.000Z")
    },
    {
        "_id": ObjectId("65afb4b91a0215cbabee5713"),
        "idSalle": 0,
        "artiste": "jggf",
        "prix": 53656,
        "style": "Jazz",
        "date": new ISODate("2024-01-04T23:00:00.000Z")
    },
    {
        "_id": ObjectId("65afb4b91a0215cbabee5714"),
        "idSalle": 0,
        "artiste": "jggf",
        "prix": 53656,
        "style": "Jazz",
        "date": new ISODate("2024-01-04T23:00:00.000Z")
    },
    {
        "_id": ObjectId("65afb4b91a0215cbabee5715"),
        "idSalle": 0,
        "artiste": "jggf",
        "prix": 53656,
        "style": "Jazz",
        "date": new ISODate("2024-01-04T23:00:00.000Z")
    },
    {
        "_id": ObjectId("65afb4b91a0215cbabee5716"),
        "idSalle": 0,
        "artiste": "jggf",
        "prix": 53656,
        "style": "Jazz",
        "date": new ISODate("2024-01-04T23:00:00.000Z")
    },
    {
        "_id": ObjectId("65afb4ba1a0215cbabee5717"),
        "idSalle": 0,
        "artiste": "jggf",
        "prix": 53656,
        "style": "Jazz",
        "date": new ISODate("2024-01-04T23:00:00.000Z")
    },
    {
        "_id": ObjectId("65afb4ba1a0215cbabee5718"),
        "idSalle": 0,
        "artiste": "jggf",
        "prix": 53656,
        "style": "Jazz",
        "date": new ISODate("2024-01-04T23:00:00.000Z")
    },
    {
        "_id": ObjectId("65afb4be1a0215cbabee5719"),
        "idSalle": 0,
        "artiste": "jggf",
        "prix": 53656,
        "style": "Jazz",
        "date": new ISODate("2024-01-04T23:00:00.000Z")
    },
    {
        "_id": ObjectId("65afb4bf1a0215cbabee571a"),
        "idSalle": 0,
        "artiste": "jggf",
        "prix": 53656,
        "style": "Jazz",
        "date": new ISODate("2024-01-04T23:00:00.000Z")
    },
    {
        "_id": ObjectId("65afb4bf1a0215cbabee571b"),
        "idSalle": 0,
        "artiste": "jggf",
        "prix": 53656,
        "style": "Jazz",
        "date": new ISODate("2024-01-04T23:00:00.000Z")
    },
    {
        "_id": ObjectId("65afb5071a0215cbabee571c"),
        "idSalle": 0,
        "artiste": "jggf",
        "prix": 53656,
        "style": "Jazz",
        "date": new ISODate("2024-01-04T23:00:00.000Z")
    },
    {
        "_id": ObjectId("65afb50e1a0215cbabee571d"),
        "idSalle": 0,
        "artiste": "jggfhgkhbhk",
        "prix": 53656,
        "style": "Jazz",
        "date": new ISODate("2024-01-04T23:00:00.000Z")
    },
    {
        "_id": ObjectId("65afb5e21a0215cbabee571e"),
        "idSalle": 0,
        "artiste": "jggfhgkhbhk",
        "prix": 53656,
        "style": "Jazz",
        "date": new ISODate("2024-01-04T23:00:00.000Z")
    },
    {
        "_id": ObjectId("65afb8281a0215cbabee571f"),
        "idSalle": 0,
        "artiste": "5454",
        "prix": 47475,
        "style": "rock",
        "date": new ISODate("2024-01-19T23:00:00.000Z")
    },
    {
        "_id": ObjectId("65b0e3a807672cbc6e23f6ae"),
        "idSalle": 5,
        "artiste": "fsgdsg",
        "prix": 1,
        "style": "string",
        "date": new ISODate("2024-01-24T10:16:46.881Z")
    },
    {
        "_id": ObjectId("65b0e4e407672cbc6e23f6af"),
        "idSalle": 5,
        "artiste": "212",
        "prix": 1,
        "style": "string",
        "date": new ISODate("2024-01-24T10:16:46.881Z")
    }]
)