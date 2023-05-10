import { useEffect, useState } from 'react';
import './App.css';
import { ReactSearchAutocomplete } from 'react-search-autocomplete';
import 'bootstrap/dist/css/bootstrap.min.css';

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
  useEffect(() => {
    const list = dumyDate.map(org => (
      {
        ...org,
        name: org.navn,
        id: org.organisasjonsnummer
      }
    ))
    setOrgList(list)
  }, [])
  const [selectedData, setSelectedData] = useState({});
  const handleOnSelect = (item) => {
    // the item selected
    setSelectedData(item);
    console.log(item)
  }
  const formatResult = (item) => {
    console.log(item);
    return (
      <>
        <span style={{ display: 'block', textAlign: 'left' }}>Navn: {item.name}</span>
        <span style={{ display: 'block', textAlign: 'left' }}>Orgnr: {item.id}</span>
      </>
    )
  }
  const [orgList, setOrgList] = useState([]);
  const handleOnSearch = (string, results) => {
  };

  return (
    <div className="App">
      <header className="App-header">
        <div className="container">
          <div className="row">
            <div className="col-6">
              <ReactSearchAutocomplete
                items={orgList}
                onSearch={handleOnSearch}
                onSelect={handleOnSelect}
                autoFocus
                formatResult={formatResult}
              />
            </div>
            <div className="col-6">
              {
                Object.keys(selectedData).length !== 0 ? <div >
                  <div className="card">
                    <h3>Nokkelopplysninger fra Enchetsr</h3>
                    <span><b>Organisasionsnummber:</b> {selectedData.organisasjonsnummer} </span>
                    <span><b>Navn/foretaksnavn:</b> {selectedData.navn}</span>
                    <span><b>Organisasjonsform:</b> {selectedData.organisasjonsform.beskrivelse}</span>
                    <span><b>Forretningsadresse:</b> {`${selectedData.forretningsadresse.land}
                     ${selectedData.forretningsadresse.landkode} 
                      ${selectedData.forretningsadresse.postnummer}
                      ${selectedData.forretningsadresse.poststed}
                       `}</span>
                  </div>
                </div> : ""
              }

            </div>
          </div>
        </div>


      </header>
    </div >
  );
}

export default App;
