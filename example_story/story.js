var storyContent = ﻿{"inkVersion":19,"root":[["^Wenn es doch nur nicht so verdammt dunkel wäre. Du blickst nach oben, in der Hoffnung etwas Orientierung zu bekommen. Aber ausser diesem ungesund violett-roten Schimmer siehst du gar nichts.","\n","^Du musst rechtzeitig Schutz finden!","\n",{"->":"Main"},["done",{"#f":5,"#n":"g-0"}],null],"done",{"Main":[["ev","str","^Geradeaus weiter","/str","/ev",{"*":".^.c-0","flg":20},"ev","str","^Anhalten zur Orientierung","/str","/ev",{"*":".^.c-1","flg":20},{"c-0":["^ Du stolperst geradeaus weiter. Ob du wohl auf dem richtigen Weg bist? Wo ist nur der verdammte Schutzbunker?","\n",["ev","str","^Einfach weiter","/str","/ev",{"*":".^.c-0","flg":20},"ev","str","^Nach links","/str","/ev",{"*":".^.c-1","flg":20},{"c-0":["^ Jetzt ist nicht Zeit zum zögern. Du bist zwar schon ausser Atem, aber du musst einfach vorwärts!","\n",{"->":".^.^.g-0"},{"#f":5}],"c-1":["^ Dein Instinkt sagt, dass Du nach links solltest. Ja genau, der Schutzbunker ist links von deiner Wohnung. Das habt ihr doch links halten musst!","\n",{"->":".^.^.g-0"},{"#f":5}],"g-0":["^Du siehst sie im letzten Moment, fast wärst du in die Hauswand geknallt!","\n","^Wohin jetzt?","\n","^Dein Puls rast, du hörst ihn in dieser dumpfen Stille in deinen Ohren schlagen.","\n","ev","str","^Tief durchatmen","/str","/ev",{"*":".^.c-2","flg":20},"ev","str","^Nach rechts","/str","/ev",{"*":".^.c-3","flg":20},{"c-2":["^ Atmen! Das ist das einzige was dir helfen kann. Du bist in Panik! Wie könnte es auch anders sein! ","\n","^Einatmen. Ausatmen. Einatmen. Ausatmen.","\n",{"->":"Hoeren"},{"#f":5}],"c-3":["^ Deine Hände berühren sofort eine Wand. Hier geht's auch nicht weiter. Jetzt musst Du dich beruhigen. Sonst ist diese Sackgasse das letzte was du erlebst. ",{"->":"Main"},"\n",{"#f":5}],"#f":5}]}],{"#f":5}],"c-1":["^ Du hälst kurz inne und hörst dich um. ","\n",{"->":"Hoeren"},{"#f":5}]}],{"#f":1}],"Hoeren":[["^Dumpf, aber du hörst sie. Menschliche Stimmen!","\n","ev","str","^Auf die Stimmen zu!","/str","/ev",{"*":".^.c-0","flg":20},"ev","str","^Von den Stimmen weg!","/str","/ev",{"*":".^.c-1","flg":20},{"c-0":["^ Du machst ein paar Schritte. Die Stimmen werden lauter. ",{"->":"Naeher"},"\n",{"#f":5}],"c-1":["^ Diese Stimmen. Sie machen dich unruhig. ",{"->":"Weiter"},"\n",{"#f":5}]}],{"#f":1}],"Naeher":[["^Die Stimmen klingen aufgeregt. Panisch.","\n","^Du hörst ein schabendes Geräusch. Metall? Das klingt nach einem Gatter, das auf Beton schabt.","\n","^Deine Arme unklammern das schwere, fellige Bündel, das du trägst. Du schaust nach unten. Zwei gelbe Katzenaugen schauen weit aufgerissen zu Dir hoch. Nios fetter Kater Eloy ist ebenso unruhig wie du. Spürt er deine Unruhe?","\n","^Aber wo ist Nio?","\n","ev","str","^Weiter auf die Stimmen zugehen","/str","/ev",{"*":".^.c-0","flg":20},"ev","str","^Nach Nio rufen","/str","/ev",{"*":".^.c-1","flg":20},{"c-0":["^ Du beschleunigst Deine Schritte.","\n",{"->":".^.^.g-0"},{"#f":5}],"c-1":["^ \"Nio!\" schreist du in Panik. ","\n","^Keine Antwort.","\n",["ev","str","^Nochmal rufen","/str","/ev",{"*":".^.c-0","flg":20},"ev","str","^Weitergehen","/str","/ev",{"*":".^.c-1","flg":20},{"c-0":["^ Noch einmal. \"Nio!!\". Wieder keine Antwort.","\n","^Es kommt keine Antwort. Keine Zeit jetzt. Du oder Nio, es gibt jetzt nichts anderes mehr.","\n",{"->":"Naeher.0.g-0"},{"#f":5}],"c-1":["^ Kannst Du Nio einfach so zurücklassen? Es schnürt dir den Atem ab, aber du musst weiter.","\n",{"->":"Naeher.0.g-0"},{"#f":5}]}],{"#f":5}],"g-0":["^Nio ist heute früh aus dem Haus und bringt sich sicher selbst in Sicherheit, redest du dir zu. ",{"->":"Schaben"},"\n",{"#f":5}]}],{"#f":1}],"Weiter":["^Das sind vermutlich nur die Wahnsinningen! Nur nicht da hin, es wäre dein Ende.","\n","^...","\n","^...","\n","^...","\n","^Es wird sowieso Dein Ende, wenn du nicht diese eine Chance packst!","\n","^Du drehst um!","\n","^Rennst los.","\n","^Du machst ein paar Schritte. ",{"->":"Naeher"},"\n",{"#f":1}],"Schaben":[["^Plötzlich ist dieses Schabende Geräusch ganz nah und klar! Du stehst oben an einer langen Rampe.","\n","^Unten hat es Licht! Und Menschen!","\n","^Scheisse! Sie schieben das Tor zu! Das reicht nie! Zwischen Dir und dem Tor sind sicher noch dreissig Meter!","\n","ev","str","^Lossprinten","/str","/ev",{"*":".^.c-0","flg":20},"ev","str","^Aufgeben","/str","/ev",{"*":".^.c-1","flg":20},{"c-0":["^ Du rennst los. So schnell wie du noch nie gerannt bist! Aber es reicht nicht! Eloy ist zu schwer, dämmert es dir! ","\n",["ev","str","^Eloy fallenlassen","/str","/ev",{"*":".^.c-0","flg":20},"ev","str","^Mit Eloy weiterrennen","/str","/ev",{"*":".^.c-1","flg":20},{"c-0":["^ Du öffnest Die Arme und Eloy entgleitet dir. Faucht dabei. Aber Du rennst einfach weiter. ",{"->":"20Meter"},"\n",{"#f":5}],"c-1":["^ Eloy kannst du nicht fallenlassen. Ausser Eloy konntest Du nichts retten als der Alarm ging. ","\n","^Aber mit Eloy geht es langsamer.","\n","^Nicht aufgeben.","\n","^Eloy ist das einzige was dir von Nio bleibt. ",{"->":"20Meter"},"\n",{"#f":5}]}],{"#f":5}],"c-1":["^ Das lohnt sich alles nicht. Du schaffst das nie. Könntest auch geradesogut aufgeben. Du hälst keuchend an. Kraulst Eloys Kopf. Er schnurrt. ","end","\n",{"#f":5}]}],{"#f":1}],"20Meter":["^Nur noch 20 Meter. Es reicht sicher!","\n","^Der massige Mann, der es zuschiebt, senkt den Blick.","\n",{"->":"10Meter"},{"#f":1}],"10Meter":[["^Das Tor ist schon fast in Griffweite. Es ist nur noch ein Spaltbreit offen. Der Mann schiebt es weiter zu, ohne dich anzuschauen. So ist es vermutlich einfacher, jemanden in den sicheren Tod zu schicken.","\n","ev","str","^'Halt'","/str","/ev",{"*":".^.c-0","flg":20},"ev","str","^Hand ausstrecken","/str","/ev",{"*":".^.c-1","flg":20},{"c-0":["^ \"Wartet auf mich\" schreist du. Oder glaubst du zu schreien. Es ist nur ein Krächzen, das aus deiner zugeschnürten Kehle kommt. ",{"->":"Tor"},"\n",{"#f":5}],"c-1":["^ Unmöglich, die können dich doch nicht einfach draussen lassen! ",{"->":"Tor"},"\n",{"#f":5}]}],{"#f":1}],"Tor":["^Du streckst deine Hand aus, ergreifst das Tor! Der massige Kerl schaut auf, und du quetschst dich durch die Schmale Spalte hindurch. ","end","\n",{"#f":1}],"ItEnded":[["^Um dich ist alles weiss.","\n","^Die Augen schmerzen.","\n","^Wo ist Nio?","\n","^Und dann wird alles schwarz.","\n","ev","str","^Play Again","/str","/ev",{"*":".^.c-0","flg":4},{"c-0":["^ ",{"#":"RELOAD"},"end","\n",{"#f":5}]}],{"#f":1}],"#f":1}],"listDefs":{}};