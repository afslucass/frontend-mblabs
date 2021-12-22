
import { useRouter } from 'next/router'
import { useRef } from 'react'
import { useEffect, useState } from 'react/cjs/react.development'
import style from './style.module.sass'

export default function UpdateEvent({ data, token }) {

    const createEventForm = useRef(null)
    const background = useRef(null)
    const imageBackground = useRef(null)
    const [errorMessage, setErrorMessage] = useState('')
    const router = useRouter()

    const [name, setName] = useState('')
    const [cep, setCep] = useState('')
    const [city, setCity] = useState('')
    const [number, setNumber] = useState('')
    const [region, setRegion] = useState('')
    const [address, setAddress] = useState('')
    const [startDate, setStartDate] = useState('')
    const [finishDate, setFinishDate] = useState('')
    const [ticketPrice, setTicketPrice] = useState(0)
    const [participantsLimit, setParticipantsLimit] = useState(0)
    const [description, setDescription] = useState('')
    const [parentalRating, setParentalRating] = useState(0)

    useEffect(() => {
        setName(data.name)
        setCep(data.cep)
        setCity(data.city)
        setNumber(data.number)
        setRegion(data.region)
        setAddress(data.address)
        setStartDate(data.startDate)
        setFinishDate(data.finishDate)
        setTicketPrice(data.ticketPrice)
        setParticipantsLimit(data.participantsLimit)
        setDescription(data.description)
        setParentalRating(data.parentalRating)
    }, [])

    function setBackground(e) {

        let reader = new FileReader()
        let file = imageBackground.current.files[0]

        reader.onloadend = () => {
            background.current.style.backgroundImage = 'url("'+reader.result+'")'
        }

        if (file) {
            reader.readAsDataURL(file);
        } else {
            background.current.style.backgroundImage = 'url()'
        }
    }

    async function submit(e) {
        e.preventDefault()
    
        const formData = new FormData(createEventForm.current)
        formData.append('background', imageBackground.current.files[0])

        let images = []
        
        if(formData.getAll('photos')[0].name.length > 0) {
            images = [...formData.getAll('photos')]
            formData.delete('photos')
        }

        const res = await fetch(process.env.NEXT_PUBLIC_API_BASE_URL+'/events/'+router.query.id, {
            method: 'PUT',
            body: formData,
            headers: {
                'Contert-Accept': 'multipart/form-data',
                'Authorization': 'Bearer '+token
            }
        })
        const json = await res.json()
        if(!res.ok) {
            setErrorMessage(json.errors[0].message)
            return
        } else {
            alert('Evento cadastrado com sucesso!')
        }

        images.forEach(async item => {
            const formDataImages = new FormData()
            formDataImages.append('photo', item)

            const resPhotos = await fetch(process.env.NEXT_PUBLIC_API_BASE_URL+'/image/'+router.query.id, {
                method: 'POST',
                body: formDataImages,
                headers: {
                    'Contert-Accept': 'multipart/form-data',
                    'Authorization': 'Bearer '+token
                }
            })
        })

        router.back()

    }   

    return (
        <div className={`container ${style.container}`} >
            <div className={style.background} ref={background} style={{ backgroundImage: 'url('+process.env.NEXT_PUBLIC_API_BASE_URL+'/image/'+data.backgroundUrl+')' }}>
                <h1>Atualização de Evento</h1>
                <div>
                    <label className={style.inputFileLabel + ' ' + style.backgroundInput} htmlFor='background'>Carregar Imagem de Background</label>
                    <input id='background' name='background' type={'file'} onChange={setBackground} ref={imageBackground} />
                </div>
            </div>
            <form ref={createEventForm} onSubmit={submit}>
                <div className='row'>
                    <div className='col'>
                        <label htmlFor='name'>Nome do Evento:</label>
                        <input id='name' type="text" name='name' className="form-control" value={name} onChange={(a) => setName(a.target.value)} />
                    </div>
                </div>
                <div className={style.margin} />
                <div className='row'>
                    <div className='col'>
                        <label htmlFor='cep'>CEP:</label>
                        <input id='cep' type="text" name='cep' className="form-control" value={cep} onChange={(a) => setCep(a.target.value)} />
                    </div>
                    <div className='col'>
                        <label htmlFor='city'>Cidade:</label>
                        <input id='city' type="text" name='city' className="form-control" value={city} onChange={(a) => setCity(a.target.value)} />
                    </div>
                </div>
                <div className='row'>
                    <div className='col'>
                        <label htmlFor='address'>Endereço:</label>
                        <input id='address' type="text" name='address' className="form-control" value={address} onChange={(a) => setAddress(a.target.value)} />
                    </div>
                    <div className='col'>
                        <label htmlFor='number'>Numero:</label>
                        <input id='number' type="text" name='number' className="form-control" value={number} onChange={(a) => setNumber(a.target.value)} />
                    </div>
                    <div className='col'>
                        <label htmlFor='region'>Região:</label>
                        <select id='region' name='region' className="form-control" value={region} onChange={(a) => setRegion(a.target.value)} >
                            <option value="AC">Acre</option>
                            <option value="AL">Alagoas</option>
                            <option value="AP">Amapá</option>
                            <option value="AM">Amazonas</option>
                            <option value="BA">Bahia</option>
                            <option value="CE">Ceará</option>
                            <option value="DF">Distrito Federal</option>
                            <option value="ES">Espírito Santo</option>
                            <option value="GO">Goiás</option>
                            <option value="MA">Maranhão</option>
                            <option value="MT">Mato Grosso</option>
                            <option value="MS">Mato Grosso do Sul</option>
                            <option value="MG">Minas Gerais</option>
                            <option value="PA">Pará</option>
                            <option value="PB">Paraíba</option>
                            <option value="PR">Paraná</option>
                            <option value="PE">Pernambuco</option>
                            <option value="PI">Piauí</option>
                            <option value="RJ">Rio de Janeiro</option>
                            <option value="RN">Rio Grande do Norte</option>
                            <option value="RS">Rio Grande do Sul</option>
                            <option value="RO">Rondônia</option>
                            <option value="RR">Roraima</option>
                            <option value="SC">Santa Catarina</option>
                            <option value="SP">São Paulo</option>
                            <option value="SE">Sergipe</option>
                            <option value="TO">Tocantins</option>
                        </select>
                    </div>
                </div>
                <div className={style.margin} />
                <div className='row'>
                    <div className='col'>
                        <label htmlFor='startDate' >Data de Início do Evento:</label>
                        <input type="date" name='startDate' className="form-control" id='startDate' value={startDate} onChange={(a) => setStartDate(a.target.value)} />
                    </div>
                    <div className='col'>
                        <label htmlFor='finishDate' >Data de Término do Evento:</label>
                        <input type="date" name='finishDate' className="form-control" id='finishDate' value={finishDate} onChange={(a) => setFinishDate(a.target.value)} />
                    </div>
                </div>
                <div className='row'>
                    <div className='col'>
                        <label htmlFor='parentalRating' >Classificação Indicatica:</label>
                        <select name='parentalRating' className="form-control" id='parentalRating' value={parentalRating} onChange={(a) => setParentalRating(a.target.value)} >
                            <option value="0">Qualquer Idade</option>
                            <option value="8">8</option>
                            <option value="12">12</option>
                            <option value="14">14</option>
                            <option value="18">18</option>
                        </select>
                    </div>
                    <div className='col'>
                        <label htmlFor='ticketPrice' >Valor do Ingresso:</label>
                        <input type="number" name='ticketPrice' className="form-control" step="0.1" id='ticketPrice' value={ticketPrice} onChange={(a) => setTicketPrice(a.target.value)} />
                    </div>
                    <div className='col'>
                        <label htmlFor='participantsLimit' >Limite de Participantes:</label>
                        <input type="number" name='participantsLimit' className="form-control" id='participantsLimit' value={participantsLimit} onChange={(a) => setParticipantsLimit(a.target.value)} />
                    </div>
                </div>
                <div className={style.margin} />
                <div className='div'>
                    <label htmlFor="textarea">Descrição</label>
                    <textarea className="form-control" id="textarea" name='description' onChange={(e) => setDescription(e.target.value)} value={description} rows={'15'} />
                </div>
                <div className={style.margin} />
                <div>
                    <label className={style.inputFileLabel} htmlFor='photos'>Adicionar Imagens</label>
                    <input id='photos' type={'file'} multiple name='photos' />
                </div>
                <div className={style.margin} />
                <div className='d-flex'>
                    <button>Atualizar</button>
                    <input type={'reset'} value={'Descartar'} className={style.reset_input} />
                    <div className={style.error_message}>{errorMessage}</div>
                </div>
            </form>
        </div>        
    )
}