import { useState } from 'react';
import './App.css';
import { ReactSearchAutocomplete } from 'react-search-autocomplete'
function App() {
    const dumyDate = [
        {
            "organisasjonsnummer": "923449809",
            "navn": "BREATHE AS",
            "organisasjonsform": {
                "kode": "AS",
                "beskrivelse": "Aksjeselskap",
                "_links": {
                    "self": {
                        "href": "https://data.brreg.no/enhetsregisteret/api/organisasjonsformer/AS"
                    }
                }
            },
            "registreringsdatoEnhetsregisteret": "2019-09-24",
            "registrertIMvaregisteret": false,
            "naeringskode1": {
                "beskrivelse": "Undervisning innen idrett og rekreasjon",
                "kode": "85.510"
            },
            "antallAnsatte": 0,
            "forretningsadresse": {
                "land": "Norge",
                "landkode": "NO",
                "postnummer": "1358",
                "poststed": "JAR",
                "adresse": [
                    "Voll terrasse 2D"
                ],
                "kommune": "BÆRUM",
                "kommunenummer": "3024"
            },
            "stiftelsesdato": "2019-08-27",
            "institusjonellSektorkode": {
                "kode": "2100",
                "beskrivelse": "Private aksjeselskaper mv."
            },
            "registrertIForetaksregisteret": true,
            "registrertIStiftelsesregisteret": false,
            "registrertIFrivillighetsregisteret": false,
            "sisteInnsendteAarsregnskap": "2021",
            "konkurs": false,
            "underAvvikling": false,
            "underTvangsavviklingEllerTvangsopplosning": false,
            "maalform": "Bokmål",
            "_links": {
                "self": {
                    "href": "https://data.brreg.no/enhetsregisteret/api/enheter/923449809"
                }
            }
        },
        {
            "organisasjonsnummer": "927470721",
            "navn": "BREATHE IT AS",
            "organisasjonsform": {
                "kode": "AS",
                "beskrivelse": "Aksjeselskap",
                "_links": {
                    "self": {
                        "href": "https://data.brreg.no/enhetsregisteret/api/organisasjonsformer/AS"
                    }
                }
            },
            "registreringsdatoEnhetsregisteret": "2021-07-27",
            "registrertIMvaregisteret": true,
            "naeringskode1": {
                "beskrivelse": "Konsulentvirksomhet tilknyttet informasjonsteknologi",
                "kode": "62.020"
            },
            "antallAnsatte": 1,
            "forretningsadresse": {
                "land": "Norge",
                "landkode": "NO",
                "postnummer": "3267",
                "poststed": "LARVIK",
                "adresse": [
                    "Lillestien 37"
                ],
                "kommune": "LARVIK",
                "kommunenummer": "3805"
            },
            "stiftelsesdato": "2021-06-29",
            "institusjonellSektorkode": {
                "kode": "2100",
                "beskrivelse": "Private aksjeselskaper mv."
            },
            "registrertIForetaksregisteret": true,
            "registrertIStiftelsesregisteret": false,
            "registrertIFrivillighetsregisteret": false,
            "sisteInnsendteAarsregnskap": "2021",
            "konkurs": false,
            "underAvvikling": false,
            "underTvangsavviklingEllerTvangsopplosning": false,
            "maalform": "Bokmål",
            "_links": {
                "self": {
                    "href": "https://data.brreg.no/enhetsregisteret/api/enheter/927470721"
                }
            }

        }
    ];
    const items = [
        {
            id: 0,
            name: 'Cobol'
        },
        {
            id: 1,
            name: 'JavaScript'
        },
        {
            id: 2,
            name: 'Basic'
        },
        {
            id: 3,
            name: 'PHP'
        },
        {
            id: 4,
            name: 'Java'
        }
    ]
    const handleOnSelect = (item) => {
        // the item selected
        console.log(item)
    }
    const formatResult = (item) => {
        return (
            <>
                <span style={{ display: 'block', textAlign: 'left' }}>id: {item.navn}</span>
                {/* <span style={{ display: 'block', textAlign: 'left' }}>name: {item.navn}</span> */}
            </>
        )
    }
    const [orgList, setOrgList] = useState(dumyDate);
    return (
        <div className="App">
            <header className="App-header">
                <div style={{ width: 400 }}>
                    <ReactSearchAutocomplete
                        items={orgList}
                        onSelect={handleOnSelect}
                        autoFocus
                        formatResult={formatResult}
                    />
                </div>
            </header>
        </div>
    );
}

export default App;
