import React, { useState } from "react";

import LanguagesSelect from '../menu/languagesSelect'
import MainStack from '../../navigate';






export default function CheckStorage({ gamer, gamerObAsyncStorage }) {
debugger

gamer = gamerObAsyncStorage

debugger
if(!gamer.leng) {
 <LanguagesSelect gamer={gamer} />
}
debugger
<MainStack gamer={gamer} />

}