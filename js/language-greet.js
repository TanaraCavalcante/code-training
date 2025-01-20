// O BA da sua startup disse ao marketing que seu site tem um grande público na Escandinávia e países vizinhos. O marketing acha que seria ótimo receber os visitantes no site em seu próprio idioma. Felizmente, você já usa uma API que detecta a localização do usuário, então essa é uma vitória fácil.

// A tarefa
// Pense em uma maneira de armazenar os idiomas como um banco de dados. Os idiomas estão listados abaixo para que você possa copiar e colar!
// Escreva uma função 'welcome' que receba um parâmetro 'language', com um tipo String, e retorne uma saudação - se você tiver em seu banco de dados. O padrão deve ser inglês se o idioma não estiver no banco de dados ou no caso de uma entrada inválida.
// O banco de dados
// Por favor, modifique isso conforme apropriado para seu idioma.

function greet(language){
    // Banco de dados com idiomas e saudações
     let db = [ 
       ["english", "Welcome"],
       ["czech", "Vitejte"],
       ["danish", "Velkomst"],
       ["dutch", "Welkom"],
       ["estonian", "Tere tulemast"],
       ["finnish", "Tervetuloa"],
       ["flemish", "Welgekomen"],
       ["french", "Bienvenue"],
       ["german", "Willkommen"],
       ["irish", "Failte"],
       ["italian", "Benvenuto"],
       ["latvian", "Gaidits"],
       ["lithuanian", "Laukiamas"],
       ["polish", "Witamy"],
       ["spanish", "Bienvenido"],
       ["swedish", "Valkommen"],
       ["welsh", "Croeso"]
     ];
   
     // Converte o idioma para minúsculas
     language = language.toLowerCase();
   
     // Busca a saudação correspondente ao idioma
     let greeting = db.find(entry => entry[0] === language);
   
     // Se encontrado, retorna a saudação; senão retorna "Welcome"
     return greeting ? greeting[1] : "Welcome";
   }
   