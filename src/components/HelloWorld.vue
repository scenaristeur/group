<template>
  <div class="hello">




    <div>
      <b-jumbotron header="GRoup" lead="Bienvenue sur Ton application Group !">
        <p>
          Pour gérer collectivement un projet, un lieu, une association...<br>
          <b>GRoup</b> s'appuie sur les résultats de recherches récentes dans plusieurs domaines de la gouvernance partagée.
          <!-- <a href="https://cli.vuejs.org" target="_blank" rel="noopener">vue-cli documentation</a>. -->
        </p>
        <b-button variant="dark" to="/createGroup" size="lg"><b>Créer un GRoup</b></b-button>
      </b-jumbotron>
    </div>

    <h3>Sur GRoup, vous pouvez</h3>
    <ul>
      <li>
        <router-link to="/createGroup">Créer des GRoups</router-link> avec chat,
        wiki, gestions des projets et des tensions, gestions d'indicateurs, et on vous concocte de nouvelles
        fonctionnalités pour très bientôt.
        Si vous avez des idées ou des besoins particuliers,
        faites-le nous savoir sur <a href="https://github.com/scenaristeur/group/issues" target="_blank">github</a>
        ou en créant un GRoup et en invitant <b>https://www.spoggy-test7.solidcommunity.net/profile/card#me</b>
      </li>

      <li><router-link to="/group?url=https%3A%2F%2Fspoggy-test7.solidcommunity.net%2Fpublic%2Fdfcv.ttl#we" rel="noopener">
        Voir des Groups</router-link> créés par d'autres utilisateurs et demander à les rejoindre
      </li>
      <li>Gérer les utilisateurs de vos Groups</li>
    </ul>

    <h3>Quelle est la différence entre GRoup et une autre plateforme de réseau social ?</h3>

    <p>La principale différence se situe au niveau de la gestion de vos données.<br>
      En effet, GRoup est basé sur
      <a href="https://fr.wikipedia.org/wiki/Solid_(projet_de_web_d%C3%A9centralis%C3%A9)" target="_blank">la plateforme Solid</a>
      dont les spécifications offrent aux utilisateurs l'opportunité de stocker leurs données là où ils le souhaitent
      <ul>
        <li>chez un fournisseur de POD 'officiel' comme <a href="https://inrupt.net/" target="_blank">https://inrupt.net/</a>
          proposé par l'entreprise Inrupt dont le rôle est de soutenir le projet Solid,</li>
          <li>ou celui de la communauté Solid
            <a href="https://solidcommunity.net" target="_blank">https://solidcommunity.net</a>,</li>
            <li>chez des indépendants comme
              <a href="https://solidweb.org" target="_blank">https://solidweb.org</a> proposé par Matthias, un développeur allemand.
            </li>
          </ul>
        </p>
        <b-alert show>
          Tout le monde peut devenir fournisseur de POD, en installant un serveur compatible et il en existe de plus en plus.
        </b-alert>
        <p>Vous pouvez même installer un fournisseur chez vous sur un Raspberry Pi.
        </p>

        <h3>Le Pod</h3>
        <p>Le Pod Solid, c'est l'espace d'hébergement propre à chaque compte et c'est aussi lui qui fournit l'authentification via le webId du POD</p>

        <b-alert show>
          Par exemple, <b>https://www.spoggy-test7.solidcommunity.net/profile/card#me</b>
          évoqué plus haut est l'identifiant de l'un de mes Pods.
          et il est associé au POD <b>https://www.spoggy-test7.solidcommunity.net/</b>
          dont vous pouvez consulter la partie publique à l'adresse <a href="https://www.spoggy-test7.solidcommunity.net/public" target="_blank">
            https://www.spoggy-test7.solidcommunity.net/public</a>.
          </b-alert>

          <p>D'autres implementations et outils s'appuient aussi sur ces principes comme Semapps de l'Assemblée Virtuelle ou Hubl de Startinblox (Happy Dev'),
            offrant des possibilités d'interconnexion avec de multiples bases de connaissances ou sources de données.</p>

            <p>Sur un Pod Solid, les données sont stockées en respectant les schémas du Web Sémantique & du LinkedData
              afin de profiter au maximum de l'interopérabilité et pouvoir se brancher sur des bases de connaissances plus vastes comme DBPedia,
              WikiData, ou encore d'autres endpoints Sparql comme Persée  oucelui de la BNF...
            </p>
            <p>Et comme vous gérez votre Pod, c'est vous qui choisissez à qui vous partagez vos données, quelles applications peuvent les manipuler...<p>

              <h3>Prêt à tenter l'aventure ? </h3>

              <b-button variant="dark" to="/createGroup" size="lg"><b>Créer un GRoup</b></b-button>
<p class="m-3">.</p>
            </div>
          </template>

          <script>
          export default {
            name: 'HelloWorld',
          }
          </script>

          <!-- Add "scoped" attribute to limit CSS to this component only -->
          <style scoped lang="scss">
          a {
            color: #42b983;
          }
          </style>
