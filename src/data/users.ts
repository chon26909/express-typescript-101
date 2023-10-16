// https://dummyjson.com/users?limit=20&skip=0&select=id,firstName,lastName,age,gender,birthDate,address,height,weight,bloodGroup,eyeColor,hair

const users = [
    {
        id: 1,
        firstName: 'Terry',
        lastName: 'Medhurst',
        age: 50,
        gender: 'male',
        birthDate: '2000-12-25',
        address: {
            address: '1745 T Street Southeast',
            city: 'Washington',
            coordinates: {
                lat: 38.867033,
                lng: -76.979235
            },
            postalCode: '20020',
            state: 'DC'
        },
        height: 189,
        weight: 75.4,
        bloodGroup: 'A−',
        eyeColor: 'Green',
        hair: {
            color: 'Black',
            type: 'Strands'
        }
    },
    {
        id: 2,
        firstName: 'Sheldon',
        lastName: 'Quigley',
        age: 28,
        gender: 'male',
        birthDate: '2003-08-02',
        address: {
            address: '6007 Applegate Lane',
            city: 'Louisville',
            coordinates: {
                lat: 38.1343013,
                lng: -85.6498512
            },
            postalCode: '40219',
            state: 'KY'
        },
        height: 187,
        weight: 74,
        bloodGroup: 'O+',
        eyeColor: 'Brown',
        hair: {
            color: 'Blond',
            type: 'Curly'
        }
    },
    {
        id: 3,
        firstName: 'Terrill',
        lastName: 'Hills',
        age: 38,
        gender: 'male',
        birthDate: '1992-12-30',
        address: {
            address: '560 Penstock Drive',
            city: 'Grass Valley',
            coordinates: {
                lat: 39.213076,
                lng: -121.077583
            },
            postalCode: '95945',
            state: 'CA'
        },
        height: 200,
        weight: 105.3,
        bloodGroup: 'A−',
        eyeColor: 'Gray',
        hair: {
            color: 'Blond',
            type: 'Very curly'
        }
    },
    {
        id: 4,
        firstName: 'Miles',
        lastName: 'Cummerata',
        age: 49,
        gender: 'male',
        birthDate: '1969-01-16',
        address: {
            address: '150 Carter Street',
            city: 'Manchester',
            coordinates: {
                lat: 41.76556000000001,
                lng: -72.473091
            },
            postalCode: '06040',
            state: 'CT'
        },
        height: 157,
        weight: 95.9,
        bloodGroup: 'B+',
        eyeColor: 'Gray',
        hair: {
            color: 'Blond',
            type: 'Very curly'
        }
    },
    {
        id: 5,
        firstName: 'Mavis',
        lastName: 'Schultz',
        age: 38,
        gender: 'male',
        birthDate: '1968-11-03',
        address: {
            address: '2721 Lindsay Avenue',
            city: 'Louisville',
            coordinates: {
                lat: 38.263793,
                lng: -85.700243
            },
            postalCode: '40206',
            state: 'KY'
        },
        height: 188,
        weight: 106.3,
        bloodGroup: 'O+',
        eyeColor: 'Brown',
        hair: {
            color: 'Brown',
            type: 'Curly'
        }
    },
    {
        id: 6,
        firstName: 'Alison',
        lastName: 'Reichert',
        age: 21,
        gender: 'female',
        birthDate: '1969-07-21',
        address: {
            address: '18 Densmore Drive',
            city: 'Essex',
            coordinates: {
                lat: 44.492953,
                lng: -73.101883
            },
            postalCode: '05452',
            state: 'VT'
        },
        height: 149,
        weight: 105.7,
        bloodGroup: 'A+',
        eyeColor: 'Amber',
        hair: {
            color: 'Blond',
            type: 'Straight'
        }
    },
    {
        id: 7,
        firstName: 'Oleta',
        lastName: 'Abbott',
        age: 31,
        gender: 'female',
        birthDate: '1982-02-21',
        address: {
            address: '637 Britannia Drive',
            city: 'Vallejo',
            coordinates: {
                lat: 38.10476999999999,
                lng: -122.193849
            },
            postalCode: '94591',
            state: 'CA'
        },
        height: 172,
        weight: 78.1,
        bloodGroup: 'B−',
        eyeColor: 'Blue',
        hair: {
            color: 'Chestnut',
            type: 'Wavy'
        }
    },
    {
        id: 8,
        firstName: 'Ewell',
        lastName: 'Mueller',
        age: 29,
        gender: 'male',
        birthDate: '1964-08-24',
        address: {
            address: '5601 West Crocus Drive',
            city: 'Glendale',
            coordinates: {
                lat: 33.6152469,
                lng: -112.179737
            },
            postalCode: '85306',
            state: 'AZ'
        },
        height: 146,
        weight: 52.1,
        bloodGroup: 'A−',
        eyeColor: 'Blue',
        hair: {
            color: 'Chestnut',
            type: 'Wavy'
        }
    },
    {
        id: 9,
        firstName: 'Demetrius',
        lastName: 'Corkery',
        age: 22,
        gender: 'male',
        birthDate: '1971-03-11',
        address: {
            address: '5403 Illinois Avenue',
            city: 'Nashville',
            coordinates: {
                lat: 36.157077,
                lng: -86.853827
            },
            postalCode: '37209',
            state: 'TN'
        },
        height: 170,
        weight: 97.1,
        bloodGroup: 'A+',
        eyeColor: 'Green',
        hair: {
            color: 'Brown',
            type: 'Strands'
        }
    },
    {
        id: 10,
        firstName: 'Eleanora',
        lastName: 'Price',
        age: 37,
        gender: 'female',
        birthDate: '1958-08-11',
        address: {
            address: '8821 West Myrtle Avenue',
            city: 'Glendale',
            coordinates: {
                lat: 33.5404296,
                lng: -112.2488391
            },
            postalCode: '85305',
            state: 'AZ'
        },
        height: 198,
        weight: 48,
        bloodGroup: 'O+',
        eyeColor: 'Blue',
        hair: {
            color: 'Chestnut',
            type: 'Wavy'
        }
    },
    {
        id: 11,
        firstName: 'Marcel',
        lastName: 'Jones',
        age: 39,
        gender: 'male',
        birthDate: '1961-09-12',
        address: {
            address: '2203 7th Street Road',
            city: 'Louisville',
            coordinates: {
                lat: 38.218107,
                lng: -85.779006
            },
            postalCode: '40208',
            state: 'KY'
        },
        height: 203,
        weight: 63.7,
        bloodGroup: 'B−',
        eyeColor: 'Amber',
        hair: {
            color: 'Black',
            type: 'Straight'
        }
    },
    {
        id: 12,
        firstName: 'Assunta',
        lastName: 'Rath',
        age: 42,
        gender: 'female',
        birthDate: '1990-12-14',
        address: {
            address: '6463 Vrain Street',
            city: 'Arvada',
            coordinates: {
                lat: 39.814056,
                lng: -105.046913
            },
            postalCode: '80003',
            state: 'CO'
        },
        height: 168,
        weight: 96.8,
        bloodGroup: 'O−',
        eyeColor: 'Gray',
        hair: {
            color: 'Black',
            type: 'Very curly'
        }
    },
    {
        id: 13,
        firstName: 'Trace',
        lastName: 'Douglas',
        age: 26,
        gender: 'male',
        birthDate: '1967-07-23',
        address: {
            address: '87 Horseshoe Drive',
            city: 'West Windsor',
            coordinates: {
                lat: 43.4731793,
                lng: -72.4967532
            },
            postalCode: '05037',
            state: 'VT'
        },
        height: 181,
        weight: 56.5,
        bloodGroup: 'O+',
        eyeColor: 'Amber',
        hair: {
            color: 'Auburn',
            type: 'Straight'
        }
    },
    {
        id: 14,
        firstName: 'Enoch',
        lastName: 'Lynch',
        age: 21,
        gender: 'male',
        birthDate: '1979-08-25',
        address: {
            address: '60 Desousa Drive',
            city: 'Manchester',
            coordinates: {
                lat: 41.7409259,
                lng: -72.5619104
            },
            postalCode: '06040',
            state: 'CT'
        },
        height: 150,
        weight: 100.3,
        bloodGroup: 'O+',
        eyeColor: 'Green',
        hair: {
            color: 'Auburn',
            type: 'Strands'
        }
    },
    {
        id: 15,
        firstName: 'Jeanne',
        lastName: 'Halvorson',
        age: 26,
        gender: 'female',
        birthDate: '1996-02-02',
        address: {
            address: '4 Old Colony Way',
            city: 'Yarmouth',
            coordinates: {
                lat: 41.697168,
                lng: -70.189992
            },
            postalCode: '02664',
            state: 'MA'
        },
        height: 176,
        weight: 45.7,
        bloodGroup: 'A+',
        eyeColor: 'Amber',
        hair: {
            color: 'Blond',
            type: 'Straight'
        }
    },
    {
        id: 16,
        firstName: 'Trycia',
        lastName: 'Fadel',
        age: 41,
        gender: 'female',
        birthDate: '1963-07-03',
        address: {
            address: '314 South 17th Street',
            city: 'Nashville',
            coordinates: {
                lat: 36.1719075,
                lng: -86.740228
            },
            postalCode: '37206',
            state: 'TN'
        },
        height: 166,
        weight: 87.2,
        bloodGroup: 'B+',
        eyeColor: 'Gray',
        hair: {
            color: 'Black',
            type: 'Very curly'
        }
    },
    {
        id: 17,
        firstName: 'Bradford',
        lastName: 'Prohaska',
        age: 43,
        gender: 'male',
        birthDate: '1975-10-20',
        address: {
            address: '1649 Timberridge Court',
            city: 'Fayetteville',
            coordinates: {
                lat: 36.084563,
                lng: -94.206082
            },
            postalCode: '72704',
            state: 'AR'
        },
        height: 199,
        weight: 94.3,
        bloodGroup: 'O−',
        eyeColor: 'Brown',
        hair: {
            color: 'Black',
            type: 'Curly'
        }
    },
    {
        id: 18,
        firstName: 'Arely',
        lastName: 'Skiles',
        age: 42,
        gender: 'male',
        birthDate: '1958-02-05',
        address: {
            address: '5461 West Shades Valley Drive',
            city: 'Montgomery',
            coordinates: {
                lat: 32.296422,
                lng: -86.34280299999999
            },
            postalCode: '36108',
            state: 'AL'
        },
        height: 192,
        weight: 97,
        bloodGroup: 'AB−',
        eyeColor: 'Amber',
        hair: {
            color: 'Brown',
            type: 'Straight'
        }
    },
    {
        id: 19,
        firstName: 'Gust',
        lastName: 'Purdy',
        age: 46,
        gender: 'male',
        birthDate: '1989-10-15',
        address: {
            address: '629 Debbie Drive',
            city: 'Nashville',
            coordinates: {
                lat: 36.208114,
                lng: -86.58621199999999
            },
            postalCode: '37076',
            state: 'TN'
        },
        height: 167,
        weight: 65.3,
        bloodGroup: 'A−',
        eyeColor: 'Amber',
        hair: {
            color: 'Black',
            type: 'Straight'
        }
    },
    {
        id: 20,
        firstName: 'Lenna',
        lastName: 'Renner',
        age: 41,
        gender: 'female',
        birthDate: '1980-01-19',
        address: {
            address: '22572 Toreador Drive',
            city: 'Salinas',
            coordinates: {
                lat: 36.602449,
                lng: -121.699071
            },
            postalCode: '93908',
            state: 'CA'
        },
        height: 175,
        weight: 68,
        bloodGroup: 'O−',
        eyeColor: 'Green',
        hair: {
            color: 'Black',
            type: 'Strands'
        }
    }
];

export default users;
