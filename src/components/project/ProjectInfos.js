export const ChibiInu={
    head:"Chibi Inu",
    time:"2018 Fall - 2019 Spring",
    role:"Programmer on a 5-member team",
    links:[{link:"https://lunagames.itch.io/chibi-inu", description:"Link to the game"},
           {link:"https://github.com/LunaLuna7/ChibiInu", description:"View on Github"}],
    image: "ChibiInu.gif",
    imageDescription: "Chibi Inu",
    description: "It is a 2D platformer game about a dog. I joined this project in "+
    "the middle, so I spent much time reading and understanding existing "+
    "code when I need to touch or use them."+
    "\n\n"+
    "Although it is a 2D platformer game, the mechanic is already "+
    "implemented when I joined the team. I worked on things like the save "+
    "system, dialogue system and cutscenes. I also made the UI to create "+
    "and select save file at Main Menu. For the dialogue system, I serialized "+
    "text information to json files to make it easier for localization if we want "+
    "to do that in the future. I also modified the timeline in Unity to create "+
    "dialogue tracks and made the cutscenes for this game. My teammates "+
    "are skillful at their fields, and I had a good experience working on this "+
    "project."
}

export const AloneTogether={
    head:"Alone Together",
    time:"2019 Fall - 2020 Winter",
    role:"Programmer on a 6-member team",
    links:[],
    image: "aloneTogether.gif",
    imageDescription: "Alone Together",
    description: "This is the project for the Capstone class I am taking at UC Irvine. The "+
    "most enjoyable work I have done during this project are the map "+
    "generation and a few shaders."+
    "\n\n"+
    "It is a roguelike game, so we want to procedurally generate the map. I "+
    "read about how other roguelike games generate their maps, and then "+
    "made a map generator that fits our design. The map consists of map "+
    "pieces of different sizes, and we populate the items inside each map "+
    "piece to add more randomness to the game."+
    "\n\n"+
    "Since I was learning about shaders, I also tried to write some shaders "+
    "for the project. I used dissolve shader, fresnel shader and stencil "+
    "buffer during this project. This may not be a lot, but I had a "+
    "fun time writing them."
}

export const  LobsterRevolution={
    head:"Lobster Revolution",
    time:"2018 Fall",
    role:"Programmer on a 7-member team",
    links:[{link:"https://niborious.itch.io/lobster-revolution", description:"Link to the game"},
            {link:"https://github.com/BMarcelus/LobsterDuel", description:"View on Github"}],
    image: "lobster.gif",
    imageDescription: "Lobster Revolution",
    description: "This is a card game about lobsters! We have been working on this "+
    "project for a whole month and I am working on the battle system. "+
    "I have never maken digital card games before, so I enjoy programming "+
    "this game."+
    "\n\n"+
    "The first thing I tried to implement is dragging the card to floor. "+
    "I used raycast to check what player touches when they press down and "+
    "release mouse, so I can know if they are clicking a card and if they "+
    "are dragging it to a spot on the floor. Later there are more things "+
    "to check, like commanding lobsters to attack/denfense and choosing "+
    "targets/materials. I add variables to store the current states of "+
    "the game and test different stuffs when player press down/release "+
    "mouse button at different states."
}

export const BrokenCompass={
    head:"Broken Compass",
    time:"2019 Global Game Jam",
    role:"Programmer on a 5-member team",
    links:[{link:"https://orangechicken.itch.io/broken-compass", description:"Link to the game"},
          {link:"https://github.com/kristenmc/Broken-Compass", description:"View on Github"}],
    image: "broken compass.gif",
    imageDescription: "Broken Compass",
    description: "Most members in my team have made too many 2d games, so we end up "+
    "making a 3d game for the global game jam. The theme was a tough one, "+
    "\"What does home make you feel\". Our designer was also a writer, so we "+
    "ended up making this narrative game."+
    "\n\n"+
    "Other programmers were concentrating on tech art, so I programmed a "+
    "bunch of stuffs including player movement, player camera, cutscenes, "+
    "picking up items, playing voice, displaying subtitles..... I kinda got "+
    "interested in shader after this game jam seeing my teammates doing it "+
    "and I plan to learn it too when I have time."
}

export const BoringOctopus={
    head:"Boring Octopus",
    time:"2017 Summer",
    role:"Solo project",
    links:[{link:"https://orangechicken.itch.io/boring-octopus", description:"Link to the game"},
          {link:"https://github.com/WeiyanZhu/BoringOctopus", description:"View on Github"}],
    image: "octopus.gif",
    imageDescription: "Boring Octopus",
    description: "A simple 2D infinite flyer game I made during summer vacation. "+
    "It was my first time to try making a phone game, and I found "+ 
    "that was not difficult with Unity. "+
    "\n\n"+
    "Players control the character to fly and shoot in a randomly "+ 
    "generated map. The game records players' hightest score and "+ 
    "their setting for volumn and language."
}

export const InterShellar={
    head:"InterShellar",
    time:"2018 Fall Game Jam",
    role:"Programmer on a 6-member team",
    links:[{link:"https://contractk4.itch.io/intershellar", description:"Link to the game"},
          {link:"https://github.com/Kyle-Wong/Intershellar", description:"View on Github"}],
    image: "intershellar.gif",
    imageDescription: "InterShellar",
    description: "A 2d game finished at a game jam in Fall 2018. My teammates are "+
    "wonderful and I had a great time working with them. "+
    "\n\n"+
    "In this project I worked on the planets which attract player to "+ 
    "rotate around them. One teammate added a circle showing the orbit "+ 
    "to make it look greater. The enemy who will shoot at players and "+ 
    "the camera which can follow player and zoom in/out are also "+ 
    "interesting to program. I tried some new things like particle "+ 
    "system in this game jam. Our artist created art very fast so I "+ 
    "also made a bunch of animation controllers."
}

export const PaintingDemo={
    head:"Painting Demo",
    time:"2018 Summer",
    role:"Self Practice",
    links:[],
    image: "paintTool.gif",
    imageDescription: "Painting Demo",
    description: "This is a practice I did during the summer. I tried to make a "+
    "painting tool in Unity. "+
    "\n\n"+
    "At first I created objects at the mouse position but it made "+ 
    "eraser difficult to program. Then I separated the board to "+ 
    "different pixel blocks and used array to store the information. "+ 
    "I put objects at the position of pixels but when there are too "+ 
    "many objects the fps became very low. In the end I put a "+ 
    "transparent picture on the board and called Unity's function "+ 
    "to modify the pixel of the picture. "+
    "\n\n"+
    "Though it is still buggy when player draw fast, trying to do "+ 
    "new things is interesting."
}

export const RileysAdventure={
    head:"Riley's adventures in Terribleland",
    time:"2018 Summer",
    role:"Solo project",
    links:[],
    image: "riley.gif",
    imageDescription: "Riley's adventures",
    description: "It's a birthday present I made for my awesome fantastic wonderful friend. "+ 
    "I came up with an idea that the player becomes an infant in another world, "+  
    "and need to grow up to 21 years old to come back. I start to add relevant "+  
    "stuff around this idea, finally it became something like this. "+ 
    "\n\n"+
    "Map tiles will change randomly after player pass them. Different things "+  
    "will happen when players step on different tiles. Question mark tile is "+  
    "the most common one and will trigger a random event. There is also a "+  
    "shop where players can buy items with their money."
}