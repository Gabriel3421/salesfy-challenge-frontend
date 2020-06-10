import React, { useEffect, useState, ChangeEvent, FormEvent, useMemo } from 'react';
import { FiWind } from 'react-icons/fi';
import { Container, Form, SubmitButton, TextButton,TextAmount, List } from './styles';
import api from '../../services/api'

interface Translate {
  translated: string;
}

const Translate: React.FC = () => {
  const [stringifyNumbers, setStringifyNumbers] = useState<String[]>([]);
  const [newNumber, setNewNumber] = useState('');
  const [amountTranslated, setAmountTranslated] = useState('zero');
  const [amountStyle, setAmountStyle] = useState<number>(-1);

  const amount = useMemo(()=>{
    return stringifyNumbers.length
  },[stringifyNumbers]);

  useEffect(() => {
    async function handleTranslateAmount(){
      await api.get<Translate>(`/?translate=${String(amount)}`).then(res => {
        setAmountTranslated(res.data.translated);
      })
    }
    handleTranslateAmount();
  }, [amount]);

  useEffect(() => {
    stringifyNumbers.map((item, index) => {
      if (item === (amountTranslated)){
        console.log(amountTranslated)
        console.log(item)
        setAmountStyle(index)
        return item
      }
      return item
    })
    
  }, [amountTranslated, stringifyNumbers]);

  function handleInputChange (event: ChangeEvent<HTMLInputElement>){
    setNewNumber(event.target.value);
  }
  async function handlesubmit (event: FormEvent){
    event.preventDefault();
    await api.get<Translate>(`/?translate=${String(newNumber)}`).then(res => {
      setAmountStyle(-1)
      setStringifyNumbers([...stringifyNumbers, res.data.translated]);
    })
    console.log(amountStyle)
    // setNewNumbers('');
  }

  return (
    <Container>
        <h1>
          <FiWind />
          Number to Words
        </h1>
        <Form onSubmit={handlesubmit}>
          <input
            type="number"
            placeholder="Enter with a number"
            value={newNumber}
            onChange={handleInputChange}
          />
          <SubmitButton >
            <TextButton>Translate</TextButton>
          </SubmitButton>
        </Form>

        <TextAmount>
          There’s {amountTranslated.toLowerCase() || 'zero'} numbers translated
        </TextAmount>

        <List>
            {stringifyNumbers.map((number, index) => {
              let color = '';
              
              if (index === amountStyle){
                color = '#7159c1'
              }
              if ( amountStyle === -1 ){
                color = ''
              }
              return (
                <li key={index}>
                  <span style={{color: color}}>{number}</span>
                </li>
              )
            })}
        </List>
      </Container>
  
  );
}

export default Translate;