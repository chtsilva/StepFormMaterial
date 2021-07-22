import React, { useState } from 'react'
import { TextField, Button } from '@material-ui/core'

function DadosEntrega() {
  const [cep, setCep] = useState('')
  const [endereco, setEndereco] = useState('')
  const [numero, setNumero] = useState('')
  const [estado, setEstado] = useState('')
  const [cidade, setCidade] = useState('')

  return (
    <form>
      <TextField
        value={cep}
        onChange={(event) => {
          setCep(event.target.value)
        }}
        id='cep' label='CEP' type='number'
        variant="outlined"
        margin="normal" />
      <TextField
        value={endereco}
        onChange={(event) => {
          setEndereco(event.target.value)
        }}
        id='endereco' label='Endereço' type='text'
        variant="outlined"
        margin="normal"
        fullWidth />
      <TextField
        value={cep}
        onChange={(event) => {
          setCep(event.target.value)
        }}
        id='numero' label='Número' type='number'
        variant="outlined"
        margin="normal" />
      <TextField id='estado' label='Estado' type='text'
        variant="outlined"
        margin="normal" />
      <TextField id='cidade' label='Cidade' type='text'
        variant="outlined"
        margin="normal" />

      <Button type='submit'
        variant="contained"
        color="primary"
        fullWidth>
        Finalizar Cadastro</Button>
    </form>
  )
}

export default DadosEntrega