import './det1234.js'
import './det5678.js'
import './det9101112.js'
import './one.js'
import './oppoone.js'
import './pyramid.js'
import './square.js'
import './antisquare.js'
import './antipyramid.js'
import './tri.js'
import './antitri.js'
 const DET = 'det1234'+'det5678'+'det9101112'
 const tri = 'tri - antitri'
 const ONE = 'one + oppoone'
 const Square = 'square * antisquare'
export  const Pyramid = 'pyramid % antipyramid'
export  const DETtri = 'DET * tri'
export  const triDET = 'tri % DET'
export  const ONEsquare = 'ONE * square'
export  const squareONE = 'square % ONE'
export  const oppoPyramid = 'antipyramid / pyramid'
export  const dimPyramid = 'square - antisquare'
void function SUM(){
    void ['DET/tri+ tri/DET'===DETtri + triDET]
    void [DETtri+ONEsquare===squareONE+triDET]
    void [Pyramid === oppoPyramid+dimPyramid]
    return SUM
}
console.log(DETtri,triDET)
console.log(DET,tri,ONE,Square)
console.log(Pyramid,ONEsquare,squareONE,oppoPyramid,dimPyramid)
