import React, {useState} from 'react'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import DialogTitle from '@material-ui/core/DialogTitle'

import MenuItem from '@material-ui/core/MenuItem'
import FormControl from '@material-ui/core/FormControl'
import Select from '@material-ui/core/Select'
import InputLabel from '@material-ui/core/InputLabel'

import MaskedInput from 'react-text-mask'

import { FaTimes } from "react-icons/fa"
import './styles.scss'

import {Row, Col} from 'react-bootstrap'



function TextMaskNascimento(props) {
  const { inputRef, ...other } = props;

  return (
    <MaskedInput
      {...other}
      ref={(ref) => {
        inputRef(ref ? ref.inputElement : null);
      }}
      mask={[/\d/,/\d/,'/',/\d/,/\d/,'/',/\d/,/\d/,/\d/,/\d/]}
      placeholderChar={'\u2000'}
    />
  );
}


function TextMaskCpf(props) {
  const { inputRef, ...other } = props;

  return (
    <MaskedInput
      {...other}
      ref={(ref) => {
        inputRef(ref ? ref.inputElement : null);
      }}
      mask={[/\d/,/\d/,/\d/,'.',/\d/,/\d/,/\d/,'.',/\d/,/\d/,/\d/,'-',/\d/,/\d/]}
      placeholderChar={'\u2000'}
    />
  );
}

function TextMaskTelefone(props) {
  const { inputRef, ...other } = props;

  return (
    <MaskedInput
      {...other}
      ref={(ref) => {
        inputRef(ref ? ref.inputElement : null);
      }}
      mask={['(', /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/]}
      placeholderChar={'\u2000'}
    />
  );
}

function TextMaskCelular(props) {
  const { inputRef, ...other } = props;

  return (
    <MaskedInput
      {...other}
      ref={(ref) => {
        inputRef(ref ? ref.inputElement : null);
      }}
      mask={['(', /\d/, /\d/, ')',' ',/\d/, ' ', /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/]}
      placeholderChar={'\u2000'}
    />
  );
}


export default function FormDialog() {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  }

  const handleClose = () => {
    setOpen(false);
  }

 return (
    <>
      <Button variant="outlined" color="primary" onClick={handleClickOpen}>
        Open form dialog
      </Button>
      <form>
      <Dialog fullWidth={true} maxWidth="md" open={open} onClose={handleClose} aria-labelledby="max-width-dialog-title">
        <DialogActions>
          <a className="close_Modal" onClick={handleClose} style={{position: 'absolute', right: 0, padding: '1em'}} ><FaTimes size={16} /></a>
        </DialogActions>
        <Row>
            <Col sm={6}>
              <DialogTitle id="max-width-dialog-title">Faça seu Login</DialogTitle>
                <DialogContent>
                  <TextField inputProps={{ maxLength: 30 }} autoFocus margin="dense" id="email" label="Email*" type="email" fullWidth />
                  <TextField inputProps={{ maxLength: 8 }} autoFocus margin="dense" id="senha" label="Senha*" type="password" fullWidth />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="primary">
                        Entrar
                    </Button>
                </DialogActions>
            </Col>
            <Col sm={6}>
              <DialogTitle id="max-width-dialog-title">Ou Cadastre-se</DialogTitle>
                <DialogContent>
                  <TextField  inputProps={{ maxLength: 30 }} autoFocus margin="dense" id="nome" label="Nome*" type="text" fullWidth />
                  <Row>
                    <Col>
                    <TextField 
                    autoFocus margin="dense" 
                    id="cpf" label="CPF*" fullWidth 
                    InputProps={{
                      inputComponent: TextMaskCpf,
                    }}
                    /> 
                    </Col>
                    <Col><TextField inputProps={{ maxLength: 30 }} autoFocus margin="dense" id="email" label="Email*" type="email" fullWidth /></Col>
                  </Row>
                  <Row> 
                    <Col>
                    <TextField 
                    autoFocus margin="dense" 
                    id="nascimento" label="Nascimento*" fullWidth 
                    InputProps={{
                      inputComponent: TextMaskNascimento,
                    }}
                    /> 
                    </Col>
                    <Col>
                    <FormControl>
                    <InputLabel id="demo-simple-select-label">Gênero*</InputLabel>
                    <Select labelId="demo-simple-select-label" id="demo-simple-select">
                      <MenuItem value={'Masculino'}>Masculino</MenuItem>
                      <MenuItem value={'Feminino'}>Feminino</MenuItem>
                    </Select>
                    </FormControl>
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                    <TextField 
                    autoFocus margin="dense" 
                    id="telefone" label="Telefone" fullWidth 
                    InputProps={{
                      inputComponent: TextMaskTelefone,
                    }}
                    /> 
                    </Col>
                    <Col>
                    <TextField 
                    autoFocus margin="dense" 
                    id="celular" label="Celular*" fullWidth 
                    InputProps={{
                      inputComponent: TextMaskCelular,
                    }}
                    />
                    </Col>
                  </Row>
                  <FormControl>
                    <InputLabel id="demo-simple-select-label">Como nos conheceu?*</InputLabel>
                    <Select labelId="demo-simple-select-label" id="demo-simple-select">
                      <MenuItem value={'Instagran'}>Instagran</MenuItem>
                      <MenuItem value={'Facebook'}>Facebook</MenuItem>
                      <MenuItem value={'Google'}>Google</MenuItem>
                      <MenuItem value={'Amigos'}>Amigos</MenuItem>
                      <MenuItem value={'Outros'}>Outros</MenuItem>
                    </Select>
                  </FormControl>
                  <TextField inputProps={{ maxLength: 30 }} autoFocus margin="dense" id="vendedor" label="Vendedor" type="text" fullWidth />
                  <Row>
                    <Col><TextField inputProps={{ maxLength: 8 }} autoFocus margin="dense" id="senha" label="Senha*" type="password" fullWidth /></Col>
                    <Col><TextField inputProps={{ maxLength: 8 }} autoFocus margin="dense" id="confirmar" label="Confirmar*" type="password" fullWidth /></Col>
                  </Row>
                </DialogContent>
              <DialogActions>
                <Button onClick={handleClose} color="primary">
                    Continuar sem Associar-se
                </Button>
              </DialogActions>
            </Col> 
        </Row>
      </Dialog>
      </form>
    </>
  )
}