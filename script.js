window.alert("Caso ocorram erros de escala, tente ajustar o zoom do navegador.");

function selecionar() {
}

function clicarSecao1() {
    document.getElementById("secao1").classList.add("selecionar");
    document.getElementById("secao2").classList.remove("selecionar");
    document.getElementById("secao3").classList.remove("selecionar");
    document.getElementById("secao4").classList.remove("selecionar");
    document.getElementById("secao5").classList.remove("selecionar");
    document.getElementById("secao6").classList.remove("selecionar");
    document.getElementById("secao7").classList.remove("selecionar");

    document.getElementById("conteudo").innerHTML = `
    <p>A Escola Estrutural-Funcionalista é uma corrente da Antropologia Social que procura compreender a sociedade a partir de sua estrutura e das relações sociais que existem entre seus membros. Para essa perspectiva, os diferentes elementos de uma sociedade não funcionam de maneira isolada, mas fazem parte de um sistema no qual instituições, grupos e relações sociais estão conectados.</p>
<p>Um dos principais pontos dessa abordagem é o estudo da estrutura social, formada pelas relações relativamente estáveis entre indivíduos e grupos. Essas relações organizam a vida coletiva e permitem compreender como uma sociedade mantém determinados padrões de organização ao longo do tempo.</p>
<p>O Estrutural-Funcionalismo também está relacionado ao conceito de função. Os diferentes elementos da sociedade podem desempenhar funções que ajudam a manter sua estrutura, sua integração e sua estabilidade. Por isso, uma instituição ou costume é analisado considerando o papel que exerce dentro do sistema social como um todo.</p>`;
}
function clicarSecao2() {
    document.getElementById("secao1").classList.remove("selecionar");
    document.getElementById("secao2").classList.add("selecionar");
    document.getElementById("secao3").classList.remove("selecionar");
    document.getElementById("secao4").classList.remove("selecionar");
    document.getElementById("secao5").classList.remove("selecionar");
    document.getElementById("secao6").classList.remove("selecionar");
    document.getElementById("secao7").classList.remove("selecionar");

    document.getElementById("conteudo").innerHTML = `
<p>A Escola Estrutural-Funcionalista desenvolveu-se na Antropologia Social britânica durante a primeira metade do século XX, em um período no qual o Funcionalismo começava a ganhar importância nas Ciências Sociais. Essa corrente surgiu em parte como reação às explicações evolucionistas que procuravam organizar as sociedades em diferentes estágios de desenvolvimento.</p>
<p>O pensamento de Émile Durkheim foi uma influência importante para o desenvolvimento dessas ideias, principalmente por sua análise da sociedade como uma realidade formada por relações e elementos que contribuem para a coesão social.</p>
<p>Na Antropologia, Alfred Radcliffe-Brown tornou-se o principal nome associado ao Funcionalismo Estrutural. Ele retomou os conceitos de estrutura e função e passou a dar maior atenção aos sistemas de relações sociais responsáveis pela organização e integração de uma sociedade.</p>`;    }
function clicarSecao3() {
    document.getElementById("secao1").classList.remove("selecionar");
    document.getElementById("secao2").classList.remove("selecionar");
    document.getElementById("secao3").classList.add("selecionar");
    document.getElementById("secao4").classList.remove("selecionar");
    document.getElementById("secao5").classList.remove("selecionar");
    document.getElementById("secao6").classList.remove("selecionar");
    document.getElementById("secao7").classList.remove("selecionar");

    document.getElementById("conteudo").innerHTML = `
    <p>Uma das principais ideias da Escola Estrutural-Funcionalista é que a sociedade possui uma estrutura formada por relações sociais entre indivíduos e grupos. Essas relações não são consideradas acontecimentos isolados, mas partes de um sistema mais amplo que pode ser estudado e analisado.</p>
<p>A função também ocupa um lugar central nessa abordagem. Os elementos presentes em uma sociedade podem desempenhar funções que contribuem para a manutenção da estrutura social. Dessa maneira, instituições, costumes e relações são analisados levando em consideração o papel que exercem dentro do conjunto.</p>
<p>Outro ponto importante é a ideia de integração. Como as partes da sociedade estão relacionadas, o funcionamento de uma delas pode estar ligado ao funcionamento das outras. Assim, a estabilidade social é entendida como resultado da relação entre diferentes elementos e instituições.</p>
<p>Essa perspectiva concentra-se principalmente na forma como uma sociedade funciona em determinado contexto, procurando compreender as relações e estruturas que permitem sua continuidade e organização.</p>   `;
}
function clicarSecao4() {
    document.getElementById("secao1").classList.remove("selecionar");
    document.getElementById("secao2").classList.remove("selecionar");
    document.getElementById("secao3").classList.remove("selecionar");
    document.getElementById("secao4").classList.add("selecionar");
    document.getElementById("secao5").classList.remove("selecionar");
    document.getElementById("secao6").classList.remove("selecionar");
    document.getElementById("secao7").classList.remove("selecionar");

    document.getElementById("conteudo").innerHTML = `
    <p>Para a Escola Estrutural-Funcionalista, a sociedade é formada por uma estrutura de relações sociais que conecta indivíduos e grupos. Essa estrutura não corresponde apenas a instituições isoladas, mas ao conjunto de relações existentes entre as diferentes posições ocupadas pelos membros da sociedade.</p>
<p>As pessoas participam da vida social por meio de diferentes relações, posições e papéis. Essas relações ajudam a organizar a sociedade e estabelecem formas relativamente estáveis de interação entre seus membros.</p>
<p>Por isso, o estudo da sociedade deve considerar principalmente como essas relações são organizadas e como permanecem ao longo do tempo. A sociedade é vista como um sistema no qual diferentes partes estão relacionadas e contribuem para sua integração.</p>
<p>A partir dessa perspectiva, compreender uma sociedade significa observar não apenas seus indivíduos, mas também as estruturas e relações sociais que organizam suas ações e permitem a continuidade da vida coletiva.</p>`;
}
function clicarSecao5() {
    document.getElementById("secao1").classList.remove("selecionar");
    document.getElementById("secao2").classList.remove("selecionar");
    document.getElementById("secao3").classList.remove("selecionar");
    document.getElementById("secao4").classList.remove("selecionar");
    document.getElementById("secao5").classList.add("selecionar");
    document.getElementById("secao6").classList.remove("selecionar");
    document.getElementById("secao7").classList.remove("selecionar");

    document.getElementById("conteudo").innerHTML = `
    <p>No Estrutural-Funcionalismo, a função corresponde ao papel que determinado elemento desempenha dentro da estrutura social. Instituições, costumes e relações podem exercer funções importantes para a organização e para a continuidade da sociedade.</p>
<p>As funções não devem ser compreendidas de maneira isolada, porque cada elemento está relacionado a outros elementos da estrutura social. Por isso, uma instituição pode ser analisada a partir da contribuição que oferece para o funcionamento do conjunto.</p>
<p>Essa forma de análise procura compreender como diferentes práticas e relações ajudam a manter a integração e a estabilidade de uma sociedade. A função de um elemento, portanto, está relacionada à maneira como ele participa da estrutura social.</p>
<p>Assim, o conceito de função permite estudar como as diferentes partes de uma sociedade estão conectadas e como suas relações contribuem para a manutenção do sistema social.</p>   `;
}
function clicarSecao6() {
    document.getElementById("secao1").classList.remove("selecionar");
    document.getElementById("secao2").classList.remove("selecionar");
    document.getElementById("secao3").classList.remove("selecionar");
    document.getElementById("secao4").classList.remove("selecionar");
    document.getElementById("secao5").classList.remove("selecionar");
    document.getElementById("secao6").classList.add("selecionar");
    document.getElementById("secao7").classList.remove("selecionar");

    document.getElementById("conteudo").innerHTML = `
    <p>O principal objetivo da Escola Estrutural-Funcionalista é compreender a estrutura social e os sistemas de relações que organizam uma sociedade. Para isso, procura analisar como indivíduos e grupos se relacionam e como essas relações formam padrões relativamente estáveis de organização.</p>
<p>Outro objetivo é identificar as funções desempenhadas pelos diferentes elementos da sociedade. Instituições, costumes e relações são estudados considerando sua participação no funcionamento da estrutura social e sua contribuição para a integração do conjunto.</p>
<p>Essa abordagem também procura explicar por que determinados padrões sociais permanecem ao longo do tempo. Ao analisar a relação entre estrutura e função, os pesquisadores buscam compreender como diferentes elementos se sustentam e se relacionam dentro de uma sociedade.</p>
<p>Dessa maneira, o Estrutural-Funcionalismo procura entender a sociedade como um sistema integrado, observando suas relações, sua organização e os mecanismos que contribuem para sua continuidade.</p>  `;
}
function clicarSecao7() {
    document.getElementById("secao1").classList.remove("selecionar");
    document.getElementById("secao2").classList.remove("selecionar");
    document.getElementById("secao3").classList.remove("selecionar");
    document.getElementById("secao4").classList.remove("selecionar");
    document.getElementById("secao5").classList.remove("selecionar");
    document.getElementById("secao6").classList.remove("selecionar");
    document.getElementById("secao7").classList.add("selecionar");

    document.getElementById("conteudo").innerHTML = `
    <p>A Escola Estrutural-Funcionalista teve grande importância para o desenvolvimento da Antropologia Social, principalmente por destacar o estudo das estruturas sociais e das relações existentes entre indivíduos e grupos. Essa abordagem ajudou a consolidar uma forma de analisar as sociedades considerando suas diferentes partes como elementos relacionados.</p>
<p>As ideias estrutural-funcionalistas contribuíram para estudos sobre instituições, parentesco, organização social e sistemas de relações. A preocupação com a estrutura e com as funções desempenhadas pelos diferentes elementos influenciou diversos pesquisadores da Antropologia.</p>
<p>Apesar de sua importância, a abordagem também recebeu críticas por dar grande destaque à estabilidade, à integração e à manutenção da sociedade. Alguns críticos apontaram que essa perspectiva poderia deixar em segundo plano conflitos, transformações e mudanças sociais.</p>
<p>Mesmo com essas críticas, o Estrutural-Funcionalismo continua sendo uma referência importante para compreender a história da Antropologia e as diferentes formas de interpretar a organização das sociedades.</p>   `;
}
