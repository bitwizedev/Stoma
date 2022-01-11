import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { FormControlLabel } from '@mui/material';
import { Radio } from '@mui/material';
import { RadioGroup } from '@mui/material';
import { FormControl } from '@mui/material';
import { FormLabel } from '@mui/material';
import FirstandLastname from "../assets/First_Last_Name";
import Signaturepad from "../assets/SignaturePad";
import CurrentData from "../assets/CurrentData";


import "../style/login.css"



export default function ChestionarCovid(){
   
    function handleSubmit(event) {
        event.preventDefault();
      }
      function handleChange(event) {
        event.preventDefault();
      }



      return (
        <div className="CovidChestionar">
          <Form onSubmit={handleSubmit}>
          <FormControl component="fieldset">
            <FormLabel component="legend">Ati intrat in contact in ultimele 14 zile cu persoane diagnosticate cu virusul SARS-CoV-2(COVID-19)?</FormLabel>
            <RadioGroup
                aria-label="gender"
                name="controlled-radio-buttons-group"
                //value={value}
                onChange={handleChange}
            >
                <FormControlLabel value="Da" control={<Radio />} label="Da" />
                <FormControlLabel value="Nu" control={<Radio />} label="Nu" />
            </RadioGroup>
            </FormControl>

            <FormControl component="fieldset">
            <FormLabel component="legend">Ati interactionat in ultimel1 14 zile cu persoane care au prezentat simptome asociate infectiei cu virusul SARS-CoV-2 (COVID-19)?</FormLabel>
            <RadioGroup
                aria-label="gender"
                name="controlled-radio-buttons-group"
                //value={value}
                onChange={handleChange}
            >
                <FormControlLabel value="Da" control={<Radio />} label="Da" />
                <FormControlLabel value="Nu" control={<Radio />} label="Nu" />
            </RadioGroup>
            </FormControl>


            <FormControl component="fieldset">
            <FormLabel component="legend">Ati interactionat in ultimel1 14 zile cu persoane  care au stat in izolare/carantina impusa de autoritati?</FormLabel>
            <RadioGroup
                aria-label="gender"
                name="controlled-radio-buttons-group"
                //value={value}
                onChange={handleChange}
            >
                <FormControlLabel value="Da" control={<Radio />} label="Da" />
                <FormControlLabel value="Nu" control={<Radio />} label="Nu" />
            </RadioGroup>
            </FormControl>


            <FormControl component="fieldset">
            <FormLabel component="legend">V-a fost impusa in ultimele 14 zile izolarea sau carantina la domiciliu de catre autoritati?</FormLabel>
            <RadioGroup
                aria-label="gender"
                name="controlled-radio-buttons-group"
                //value={value}
                onChange={handleChange}
            >
                <FormControlLabel value="Da" control={<Radio />} label="Da" />
                <FormControlLabel value="Nu" control={<Radio />} label="Nu" />
            </RadioGroup>
            </FormControl>

            <FormControl component="fieldset">
            <FormLabel component="legend">Ati avut in ultimele 14 zile unul din simptomele de mai jos?</FormLabel>
            <RadioGroup
                aria-label="gender"
                name="controlled-radio-buttons-group"
                //value={value}
                onChange={handleChange}
            >
                <FormControlLabel value="Da" control={<Radio />} label="Da" />
                <FormControlLabel value="Nu" control={<Radio />} label="Nu" />
            </RadioGroup>
            </FormControl>

            <FormControl component="fieldset">
            <FormLabel component="legend">Care sunt bolile de care suferiti?</FormLabel>
            <RadioGroup
                aria-label="gender"
                name="controlled-radio-buttons-group"
                //value={value}
                onChange={handleChange}
            >
                <FormControlLabel value="Da" control={<Radio />} label="Da" />
                <FormControlLabel value="Nu" control={<Radio />} label="Nu" />
            </RadioGroup>
            </FormControl>
            <p>Am luat cunostinta de faptul ca nerespectarea masurilor privitoare la prevenirea sau combaterea bolilor infecto-contagioase 
                se sanctioneaza conform ar. 352 din Codul penal si a art. 34 lit. m) din H.G. nr. 857/2011 privin stabilirea 
                si sanctionarea contraventiilor la normele din domeniul senatatii publice, cu modificarile si completarile ulterioare.
            </p>

            <FirstandLastname/>
            <CurrentData/>
            <Signaturepad/>
            <Button block size="lg" type="submit">
              Trimite
            </Button>
          </Form>
        </div>
      );  
}