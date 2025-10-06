var vertices = [
    // Basis piramida (titik A, B, C, D) - DIPINDAH KE Y=-2.0
    -1.0, -2.0, 0.5,    //titik A 0 (X digeser -1.0)
    -0.5, -2.0, 0.5,    //titik B 1 (X digeser -1.0)
    -0.5, -2.0, 0.0,    //titik C 2 (X digeser -1.0)
    -1.0, -2.0, 0.0,    //titik D 3 (X digeser -1.0)

    // Sisi 1: B, C, E
    -0.5, -2.0, 0.5,    //titik B 1
    -0.5, -2.0, 0.0,    //titik C 2
    // TITIK E DIPERBAIKI (Puncak dipindah ke Y=0.0)
    -0.75, 0.0, 0.25,   //titik E 4 

    // Sisi 2: A, D, E
    -1.0, -2.0, 0.5,    //titik A 0
    -1.0, -2.0, 0.0,    //titik D 3
    // TITIK E DIPERBAIKI
    -0.75, 0.0, 0.25,   //titik E 4 

    // Sisi 3: D, C, E
    -1.0, -2.0, 0.0,    //titik D 3
    -0.5, -2.0, 0.0,    //titik C 2
    // TITIK E DIPERBAIKI
    -0.75, 0.0, 0.25,   //titik E 4 

    // Sisi 4 (ulangan): D, C, E
    -1.0, -2.0, 0.0,    //titik D 3
    -0.5, -2.0, 0.0,    //titik C 2
    // TITIK E DIPERBAIKI
    -0.75, 0.0, 0.25,   //titik E 4 

    // Sisi 5 (ulangan): A, B, E
    -1.0, -2.0, 0.5,    //titik A 0
    -0.5, -2.0, 0.5,    //titik B 1
    // TITIK E DIPERBAIKI
    -0.75, 0.0, 0.25   //titik E 4 
];

var lines = [
    // ... PERLU DIUBAH JUGA SESUAI VERTEKS DI ATAS ...
    -1.0, -2.0, 0.5,    //titik A 0
    -0.5, -2.0, 0.5,    //titik B 1

    -0.5, -2.0, 0.5,    //titik B 1
    -0.5, -2.0, 0.0,    //titik C 2

    -0.5, -2.0, 0.0,    //titik C 2
    -1.0, -2.0, 0.0,    //titik D 3

    -1.0, -2.0, 0.0,    //titik D 3
    -1.0, -2.0, 0.5,    //titik A 0

    -1.0, -2.0, 0.5,    //titik A 0
    -0.75, 0.0, 0.25,   //titik E 4

    -0.5, -2.0, 0.5,    //titik B 1
    -0.75, 0.0, 0.25,   //titik E 4

    -0.5, -2.0, 0.0,    //titik C 2  
    -0.75, 0.0, 0.25,   //titik E 4

    -1.0, -2.0, 0.0,    //titik D 3
    -0.75, 0.0, 0.25   //titik E 4  
];

// ... (colors dan indices tidak perlu diubah) ...
var colors = [
    1,0,1, 1,0,1, 
    1,0,1, 1,0,1,

    0,0,1, 0,0,1, 
    0,0,1, 0,0,1,

    1,1,0, 1,1,0, 
    1,1,0, 1,1,0,

    1,0,1, 1,0,1, 
    1,0,1, 1,0,1,

    1,0,1, 1,0,1, 
    1,0,1, 1,0,1,

    1,0,1, 1,0,1, 
    1,0,1, 1,0,1,

    1,0,1, 1,0,1, 
    1,0,1, 1,0,1,

    1,1,0, 1,1,0, 
    1,1,0, 1,1,0
];

var indices = [
    0,1, 2,3, 4,5, 6,7, 8,9, 10,11, 12,13, 14,15
];