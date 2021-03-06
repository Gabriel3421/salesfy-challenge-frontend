import React, { useEffect, useState, ChangeEvent, FormEvent } from 'react';
import { 
  Container,
  Image,
  Form,
  SubmitButton,
  TextButton,TextAmount,
  ScrollView,
  List,
  TextNumber 
} from './styles';
import { useDispatch, useSelector } from 'react-redux'
import { ApplicationState } from '../../store'
import { addNumberTranslatedReq } from '../../store/ducks/numberToWords/actions'
import api from '../../services/api';
import logo from '../../assets/logo_desafio.svg';

interface Translate {
  translated: string;
}

const Translate: React.FC = () => {
  const dispatch = useDispatch();
  const stringifyNumbers = useSelector(( { numberToWords }: ApplicationState) => numberToWords.data)
  const[amountTranslated, setAmountTranslated] = useState('');
  const [newNumber, setNewNumber] = useState('');
  
  useEffect(() => {
    window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  }, []);

  useEffect(() => {
    async function handleTranslateAmount(){
      await api.get<Translate>(`/?translate=${String(stringifyNumbers.length)}`).then(res => {
        setAmountTranslated(res.data.translated);
      })
    }
    handleTranslateAmount();
  }, [stringifyNumbers]);

  function handleInputChange (event: ChangeEvent<HTMLInputElement>){
    setNewNumber(event.target.value);
  }

  async function handlesubmit (event: FormEvent){
    event.preventDefault();
    dispatch(addNumberTranslatedReq(Number(newNumber)))
  }

  return (
    <Container>
        <Image src={logo} alt="logo"/>
        <Form onSubmit={handlesubmit} >
          <input
            id="input"
            type="number"
            placeholder="Enter with a NUMBER"
            value={newNumber}
            autoComplete='off'
            onChange={handleInputChange}
            required
          />
          <SubmitButton>
            <TextButton>Translate</TextButton>
          </SubmitButton>
        </Form>

        <TextAmount>
          There’s {amountTranslated.toLowerCase() || 'zero'} numbers translated
        </TextAmount>
        
        <ScrollView visible={stringifyNumbers.length > 7 ? true : false}>
          <List>
              {stringifyNumbers.map((item, index) => (
                <li key={index}>
                  <TextNumber styled={item.translated === amountTranslated}>{item.translated}</TextNumber>
                </li>
              ))}
          </List>
        </ScrollView>
      </Container>
  );
}

export default Translate;