import React from "react";

import '../styles/Home.css';

function Home() {
    return (
        <>
            <section>
                <p>
                Olá, seja bem-vindo ao chat, aqui você poderá se comunicar de forma segura com todos os agentes de meio ambiente que estão trabalhando na mesma causa, o monitoramento das indústrias que estão causando poluição no rio Tietê, envie mensagens, amojes e arquivos para compartilhar informações, se comunicar e se manter atualizado.
                </p>
            </section>
            <section>
                <iframe width="100%" height="620"
                src="https://www.youtube.com/embed/cubEMvBhCpM"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen></iframe>
            </section>
            <section>
                <h2 style={{textAlign: "center"}}>Sobre o Meio Ambiente e Nossa Causa</h2>
                <p>Segundo a ANA (Agência Nacional de Águas), em 2019 o Brasil possuiu 83.450 quilômetros de rios poluídos.</p>
                <p>A poluição das indústrias causadas em rios, é um grave problema ao meio ambiente, que leva não só a perca da vida marinha, como também a nossa. Os efluentes (resíduos de origem da atividade, como o industrial), essa contaminação pode causar doenças como infecções gastrointestinais, cólera e hepatites.</p>
                <p>Por isso o tratamento e prevenção dos rios é tão importante para o meio ambiente, é importante garantimos que as indústrias estão fazendo o devido tratamento nos efluentes que produzem.</p>
                <p>A conscientização é uma tarefa importante para evitar a poluição nos rios, assim com menos pessoas poluindo teremos mais rios saudáveis. Uma maneira para isso é informa as pessoas sobre:</p>
                <ul>
                    <li>Não descarte o óleo de cozinha no ralo. Guarde o produto em uma garrafa e entregue para uma cooperativa para que possa ser transformado em sabão;</li>
                    <li>Não utilize pesticidas ou herbicidas nas plantas;</li>
                    <li>Jogue o lixo sempre em local adequado e amarre bem os sacos antes de pôr na lixeira;</li>
                    <li>Não jogue nenhum tipo de material, como sacolinhas plásticas e embalagens, em rios, lagos e mares;</li>
                    <li>Não descarte medicamentos ou outros materiais no vaso sanitário. Algumas farmácias fazem a coleta de remédios vencidos;</li>
                    <li>Evite a erosão do solo promovendo a cobertura vegetal nos locais com essa tendência;</li>
                    <li>Use menos produtos químicos para limpar a casa. Opte por produtos biodegradáveis.</li>
                </ul>
                <p>Vamos juntos trabalhar para melhorar e cuidar do nosso planeta.</p>
            </section>
        </>
    );
}

export default Home;