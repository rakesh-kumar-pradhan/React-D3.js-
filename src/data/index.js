const data = [
    {
        'name': 'Sales',
        'gender': 'Male',
        'age': 33,
        "month":"January",
        'activities': [
            { "date": "2018-10-2", "count": 56 },
            { "date": "2018-10-3", "count": 55 },
            { "date": "2018-10-4", "count": 70 },
            { "date": "2018-10-5", "count": 35 },
            { "date": "2018-10-6", "count": 61 },
            { "date": "2018-10-7", "count": 71 },
            { "date": "2018-10-8", "count": 57 },
            { "date": "2018-10-9", "count": 14 },
            { "date": "2018-10-10", "count": 72 },
            { "date": "2018-10-11", "count": 75 },
            { "date": "2018-10-12", "count": 35 },
            { "date": "2018-10-13", "count": 27 },
            { "date": "2018-10-14", "count": 57 },
            { "date": "2018-10-15", "count": 77 }
        ]
    },
    {
        'name': 'Advertising',
        'gender': 'Male',
        'age': 12,
        "month":"February",
        'activities': [
            { "date": "2018-10-2", "count": 31 },
            { "date": "2018-10-3", "count": 76 },
            { "date": "2018-10-4", "count": 48 },
            { "date": "2018-10-5", "count": 63 },
            { "date": "2018-10-6", "count": 42 },
            { "date": "2018-10-7", "count": 76 },
            { "date": "2018-10-8", "count": 30 },
            { "date": "2018-10-9", "count": 51 },
            { "date": "2018-10-10", "count": 42 },
            { "date": "2018-10-11", "count": 37 },
            { "date": "2018-10-12", "count": 26 },
            { "date": "2018-10-13", "count": 48 },
            { "date": "2018-10-14", "count": 95 },
            { "date": "2018-10-15", "count": 11 }
        ]
    },
    {
        'name': 'Inventory',
        'gender': 'Female',
        'age': 41,
        "month":"April",
        'activities': [
            { "date": "2018-10-2", "count": 31 },
            { "date": "2018-10-3", "count": 76 },
            { "date": "2018-10-4", "count": 48 },
            { "date": "2018-10-5", "count": 36 },
            { "date": "2018-10-6", "count": 42 },
            { "date": "2018-10-7", "count": 72 },
            { "date": "2018-10-8", "count": 33 },
            { "date": "2018-10-9", "count": 55 },
            { "date": "2018-10-10", "count": 42 },
            { "date": "2018-10-11", "count": 27 },
            { "date": "2018-10-12", "count": 46 },
            { "date": "2018-10-13", "count": 58 },
            { "date": "2018-10-14", "count": 45 },
            { "date": "2018-10-15", "count": 12 }
        ]
    },
    {
        'name': 'Entertainment',
        'gender': 'Male',
        'age': 16,
        "month":"May",
        'activities': [
            { "date": "2018-10-2", "count": 66 },
            { "date": "2018-10-3", "count": 10 },
            { "date": "2018-10-4", "count": 54 },
            { "date": "2018-10-5", "count": 75 },
            { "date": "2018-10-6", "count": 55 },
            { "date": "2018-10-7", "count": 84 },
            { "date": "2018-10-8", "count": 24 },
            { "date": "2018-10-9", "count": 92 },
            { "date": "2018-10-10", "count": 84 },
            { "date": "2018-10-11", "count": 3 },
            { "date": "2018-10-12", "count": 78 },
            { "date": "2018-10-13", "count": 14 },
            { "date": "2018-10-14", "count": 30 },
            { "date": "2018-10-15", "count": 81 }
        ]
    },
    {
        'name': 'Product',
        'gender': 'Male',
        'age': 59,
        "month":"June",
        'activities': [
            { "date": "2018-10-2", "count": 17 },
            { "date": "2018-10-3", "count": 22 },
            { "date": "2018-10-4", "count": 23 },
            { "date": "2018-10-5", "count": 1 },
            { "date": "2018-10-6", "count": 54 },
            { "date": "2018-10-7", "count": 58 },
            { "date": "2018-10-8", "count": 84 },
            { "date": "2018-10-9", "count": 24 },
            { "date": "2018-10-10", "count": 32 },
            { "date": "2018-10-11", "count": 16 },
            { "date": "2018-10-12", "count": 5 },
            { "date": "2018-10-13", "count": 22 },
            { "date": "2018-10-14", "count": 33 },
            { "date": "2018-10-15", "count": 29 }
        ]
    },
    {
        'name': 'Eve',
        'gender': 'Female',
        'age': 38,
        "month":"July",
        'activities': [
            { "date": "2018-10-2", "count": 3 },
            { "date": "2018-10-3", "count": 16 },
            { "date": "2018-10-4", "count": 12 },
            { "date": "2018-10-5", "count": 6 },
            { "date": "2018-10-6", "count": 97 },
            { "date": "2018-10-7", "count": 81 },
            { "date": "2018-10-8", "count": 22 },
            { "date": "2018-10-9", "count": 55 },
            { "date": "2018-10-10", "count": 99 },
            { "date": "2018-10-11", "count": 13 },
            { "date": "2018-10-12", "count": 76 },
            { "date": "2018-10-13", "count": 24 },
            { "date": "2018-10-14", "count": 39 },
            { "date": "2018-10-15", "count": 87 }
        ]
    },
    {
        'name': 'Karen',
        'gender': 'Female',
        'age': 21,
        "month":"August",
        'activities': [
            { "date": "2018-10-2", "count": 74 },
            { "date": "2018-10-3", "count": 99 },
            { "date": "2018-10-4", "count": 60 },
            { "date": "2018-10-5", "count": 2 },
            { "date": "2018-10-6", "count": 90 },
            { "date": "2018-10-7", "count": 63 },
            { "date": "2018-10-8", "count": 36 },
            { "date": "2018-10-9", "count": 88 },
            { "date": "2018-10-10", "count": 23 },
            { "date": "2018-10-11", "count": 34 },
            { "date": "2018-10-12", "count": 56 },
            { "date": "2018-10-13", "count": 87 },
            { "date": "2018-10-14", "count": 18 },
            { "date": "2018-10-15", "count": 38 }
        ]
    },
    {
        'name': 'Kirsty',
        'gender': 'Unknown',
        'age': 25,
        "month":"September",
        'activities': [
            { "date": "2018-10-2", "count": 5 },
            { "date": "2018-10-3", "count": 99 },
            { "date": "2018-10-4", "count": 9 },
            { "date": "2018-10-5", "count": 65 },
            { "date": "2018-10-6", "count": 41 },
            { "date": "2018-10-7", "count": 99 },
            { "date": "2018-10-8", "count": 42 },
            { "date": "2018-10-9", "count": 21 },
            { "date": "2018-10-10", "count": 89 },
            { "date": "2018-10-11", "count": 76 },
            { "date": "2018-10-12", "count": 83 },
            { "date": "2018-10-13", "count": 19 },
            { "date": "2018-10-14", "count": 63 },
            { "date": "2018-10-15", "count": 80 }
        ]
    },
    {
        'name': 'Chris',
        'gender': 'Female',
        'age': 30,
        "month":"October",
        'activities': [
            { "date": "2018-10-2", "count": 77 },
            { "date": "2018-10-3", "count": 28 },
            { "date": "2018-10-4", "count": 97 },
            { "date": "2018-10-5", "count": 40 },
            { "date": "2018-10-6", "count": 45 },
            { "date": "2018-10-7", "count": 21 },
            { "date": "2018-10-8", "count": 49 },
            { "date": "2018-10-9", "count": 24 },
            { "date": "2018-10-10", "count": 54 },
            { "date": "2018-10-11", "count": 99 },
            { "date": "2018-10-12", "count": 69 },
            { "date": "2018-10-13", "count": 9 },
            { "date": "2018-10-14", "count": 69 },
            { "date": "2018-10-15", "count": 70 }
        ]
    },
    {
        'name': 'Lisa',
        'gender': 'Female',
        'age': 47,
        "month":"November",
        'activities': [
            { "date": "2018-10-2", "count": 95 },
            { "date": "2018-10-3", "count": 66 },
            { "date": "2018-10-4", "count": 83 },
            { "date": "2018-10-5", "count": 36 },
            { "date": "2018-10-6", "count": 82 },
            { "date": "2018-10-7", "count": 51 },
            { "date": "2018-10-8", "count": 75 },
            { "date": "2018-10-9", "count": 76 },
            { "date": "2018-10-10", "count": 8 },
            { "date": "2018-10-11", "count": 58 },
            { "date": "2018-10-12", "count": 4 },
            { "date": "2018-10-13", "count": 94 },
            { "date": "2018-10-14", "count": 49 },
            { "date": "2018-10-15", "count": 61 }
        ]
    },
    {
        'name': 'Tom',
        'gender': 'Male',
        'age': 15,
        "month":"December",
        'activities': [
            { "date": "2018-10-2", "count": 21 },
            { "date": "2018-10-3", "count": 88 },
            { "date": "2018-10-4", "count": 61 },
            { "date": "2018-10-5", "count": 9 },
            { "date": "2018-10-6", "count": 80 },
            { "date": "2018-10-7", "count": 37 },
            { "date": "2018-10-8", "count": 82 },
            { "date": "2018-10-9", "count": 67 },
            { "date": "2018-10-10", "count": 93 },
            { "date": "2018-10-11", "count": 19 },
            { "date": "2018-10-12", "count": 90 },
            { "date": "2018-10-13", "count": 10 },
            { "date": "2018-10-14", "count": 23 },
            { "date": "2018-10-15", "count": 13 }
        ]
    }
]

export default data;