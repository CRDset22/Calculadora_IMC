import React, { useState } from 'react';
import './CalculateIMCPage.css';

function CalculateIMCPage() {
    const [weight, setWeight] = useState('');
    const [height, setHeight] = useState('');
    const [result, setResult] = useState('');
    const [healthIndicator, setHealthIndicator] = useState('');

    const calculateIMC = () => {
        const weightValue = parseFloat(weight);
        const heightValue = parseFloat(height) / 100; // Convertendo para metros
        const imc = weightValue / ((heightValue * heightValue));

        setResult(`Seu IMC é: ${imc.toFixed(2)}`);

        if (imc < 16) {
            setHealthIndicator('Muito abaixo do peso');
        } else if (imc >= 16 && imc < 18.5) {
            setHealthIndicator('Abaixo do peso');
        } else if (imc >= 18.5 && imc < 25) {
            setHealthIndicator('Peso saudável');
        } else if (imc >= 25 && imc < 30) {
            setHealthIndicator('Sobrepeso');
        } else if (imc >= 30 && imc < 45) {
            setHealthIndicator('Obeso');
        }else {
            setHealthIndicator('Indicação de Cirurgia Bariátrica');
        }
    };

    return (
        <div className="calculate-imc-page">
            <h1>Calculadora de IMC</h1>
            <div className="input-fields">
                <label htmlFor="weight">Peso (kg):</label>
                <input
                    type="number"
                    id="weight"
                    name="weight"
                    placeholder="Digite seu peso"
                    value={weight}
                    onChange={(e) => setWeight(e.target.value)}
                />
                
                <label htmlFor="height">Altura (cm):</label>
                <input
                    type="number"
                    id="height"
                    name="height"
                    placeholder="Digite sua altura"
                    value={height}
                    onChange={(e) => setHeight(e.target.value)}
                />

                <button onClick={calculateIMC}>Calcular IMC</button>
            </div>
            <div id="result">{result}</div>
            <div id="health-indicator">Indicador de saúde: {healthIndicator}</div>
        </div>
    );
}

export default CalculateIMCPage;

