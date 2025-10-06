// helper.js

// Fungsi utilitas untuk mengirim matriks ke shader
function setUniformMatrix(matrix, gl, program){
    var uFormMatrix = gl.getUniformLocation(program, 'uFormMatrix');
    gl.uniformMatrix4fv(uFormMatrix, false, matrix);
}

// Fungsi BARU: Reset Matriks ke Matriks Identitas
function identity(gl, program){
    var forMatrix = new Float32Array([
        1.0, 0.0, 0.0, 0.0,
        0.0, 1.0, 0.0, 0.0,
        0.0, 0.0, 1.0, 0.0,
        0.0, 0.0, 0.0, 1.0
    ]);
    setUniformMatrix(forMatrix, gl, program);
}

// FUNGSI TRANSFORMASI YANG DIREVISI:
function translation(dx, dy, dz, gl, program){
    var forMatrix = new Float32Array([
        1.0, 0.0, 0.0, 0.0,
        0.0, 1.0, 0.0, 0.0,
        0.0, 0.0, 1.0, 0.0,
        dx, dy, dz, 1.0
    ]);
    setUniformMatrix(forMatrix, gl, program);
}

function scale(sx, sy, sz, gl, program){
    var forMatrix = new Float32Array([
        sx, 0.0, 0.0, 0.0,
        0.0, sy, 0.0, 0.0,
        0.0, 0.0, sz, 0.0,
        0.0, 0.0, 0.0, 1.0
    ]);
    setUniformMatrix(forMatrix, gl, program);
}
// ... (Lanjutkan revisi untuk semua fungsi transformasi: shear, rotateZ, rotateX, rotateY)
// Contoh untuk rotateZ:
function rotateZ(angle, gl, program){
    var sa = Math.sin(angle);
    var ca = Math.cos(angle);
    var forMatrix = new Float32Array([
        ca, -sa, 0.0, 0.0,
        sa, ca, 0.0, 0.0,
        0.0, 0.0, 1.0, 0.0,
        0.0, 0.0, 0.0, 1.0
    ]);
    setUniformMatrix(forMatrix, gl, program);
}

// ... dan seterusnya untuk semua fungsi ...
function rotateZ(angle, gl, program){
    var sa = Math.sin(angle);
    var ca = Math.cos(angle);
    var forMatrix = new Float32Array([
        ca, -sa, 0.0, 0.0,
        sa, ca, 0.0, 0.0,
        0.0, 0.0, 1.0, 0.0,
        0.0, 0.0, 0.0, 1.0
    ]);

    var uFormMatrix = gl.getUniformLocation(program, 'uFormMatrix');
    gl.uniformMatrix4fv(uFormMatrix, false, forMatrix);
}

function rotateX(angle, gl, program){
    var sa = Math.sin(angle);
    var ca = Math.cos(angle);
    var forMatrix = new Float32Array([
        1.0, 0.0, 0.0, 0.0,
        0.0, ca, -sa, 0.0,
        0.0, sa, ca, 0.0,
        0.0, 0.0, 0.0, 1.0
    ]);

    var uFormMatrix = gl.getUniformLocation(program, 'uFormMatrix');
    gl.uniformMatrix4fv(uFormMatrix, false, forMatrix);
}

function rotateY(angle, gl, program){
    var sa = Math.sin(angle);
    var ca = Math.cos(angle);
    var forMatrix = new Float32Array([
        ca, 0.0, sa, 0.0,
        0.0, 1.0, 0.0, 0.0,
        -sa, 0.0, ca, 0.0,
        0.0, 0.0, 0.0, 1.0
    ]);

    var uFormMatrix = gl.getUniformLocation(program, 'uFormMatrix');
    gl.uniformMatrix4fv(uFormMatrix, false, forMatrix);
}