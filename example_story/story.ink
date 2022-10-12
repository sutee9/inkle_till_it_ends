//Write your story here. You can use 
Wenn es doch nur nicht so verdammt dunkel wäre. Du blickst nach oben, in der Hoffnung etwas Orientierung zu bekommen. Aber ausser diesem ungesund violett-roten Schimmer siehst du gar nichts. 
Du musst rechtzeitig Schutz finden!
-> Main

== Main ==
* [Geradeaus weiter] Du stolperst geradeaus weiter. Ob du wohl auf dem richtigen Weg bist? Wo ist nur der verdammte Schutzbunker?
  * * [Einfach weiter] Jetzt ist nicht Zeit zum zögern. Du bist zwar schon ausser Atem, aber du musst einfach vorwärts!
  * * [Nach links] Dein Instinkt sagt, dass Du nach links solltest. Ja genau, der Schutzbunker ist links von deiner Wohnung. Das habt ihr doch links halten musst!
  - - Du siehst sie im letzten Moment, fast wärst du in die Hauswand geknallt!
      Wohin jetzt?
      Dein Puls rast, du hörst ihn in dieser dumpfen Stille in deinen Ohren schlagen.
      * * [Tief durchatmen] Atmen! Das ist das einzige was dir helfen kann. Du bist in Panik! Wie könnte es auch anders sein! 
          Einatmen. Ausatmen. Einatmen. Ausatmen. 
          -> Hoeren.
      * * [Nach rechts] Deine Hände berühren sofort eine Wand. Hier geht's auch nicht weiter. Jetzt musst Du dich beruhigen. Sonst ist diese Sackgasse das letzte was du erlebst. -> Main
* [Anhalten zur Orientierung] Du hälst kurz inne und hörst dich um. 
  -> Hoeren

== Hoeren ==
Dumpf, aber du hörst sie. Menschliche Stimmen! 
* [Auf die Stimmen zu!] Du machst ein paar Schritte. Die Stimmen werden lauter. -> Naeher
* [Von den Stimmen weg!] Diese Stimmen. Sie machen dich unruhig. -> Weiter

== Naeher ==
Die Stimmen klingen aufgeregt. Panisch.
Du hörst ein schabendes Geräusch. Metall? Das klingt nach einem Gatter, das auf Beton schabt.
Deine Arme unklammern das schwere, fellige Bündel, das du trägst. Du schaust nach unten. Zwei gelbe Katzenaugen schauen weit aufgerissen zu Dir hoch. Nios fetter Kater Eloy ist ebenso unruhig wie du. Spürt er deine Unruhe? 
Aber wo ist Nio?
* [Weiter auf die Stimmen zugehen] Du beschleunigst Deine Schritte.
* [Nach Nio rufen] "Nio!" schreist du in Panik. 
  Keine Antwort. 
  * * [Nochmal rufen] Noch einmal. "Nio!!". Wieder keine Antwort.
  Es kommt keine Antwort. Keine Zeit jetzt. Du oder Nio, es gibt jetzt nichts anderes mehr.
  * * [Weitergehen] Kannst Du Nio einfach so zurücklassen? Es schnürt dir den Atem ab, aber du musst weiter.
- Nio ist heute früh aus dem Haus und bringt sich sicher selbst in Sicherheit, redest du dir zu. -> Schaben

== Weiter ==
Das sind vermutlich nur die Wahnsinningen! Nur nicht da hin, es wäre dein Ende.
...
...
...
Es wird sowieso Dein Ende, wenn du nicht diese eine Chance packst!
Du drehst um!
Rennst los. 
Du machst ein paar Schritte. -> Naeher

== Schaben ==
Plötzlich ist dieses Schabende Geräusch ganz nah und klar! Du stehst oben an einer langen Rampe.
Unten hat es Licht! Und Menschen!
Scheisse! Sie schieben das Tor zu! Das reicht nie! Zwischen Dir und dem Tor sind sicher noch dreissig Meter!
* [Lossprinten] Du rennst los. So schnell wie du noch nie gerannt bist! Aber es reicht nicht! Eloy ist zu schwer, dämmert es dir! 
  * * [Eloy fallenlassen] Du öffnest Die Arme und Eloy entgleitet dir. Faucht dabei. Aber Du rennst einfach weiter. -> 20Meter
  * * [Mit Eloy weiterrennen] Eloy kannst du nicht fallenlassen. Ausser Eloy konntest Du nichts retten als der Alarm ging. 
      Aber mit Eloy geht es langsamer.
      Nicht aufgeben.
      Eloy ist das einzige was dir von Nio bleibt. -> 20Meter
* [Aufgeben] Das lohnt sich alles nicht. Du schaffst das nie. Könntest auch geradesogut aufgeben. Du hälst keuchend an. Kraulst Eloys Kopf. Er schnurrt. -> END

== 20Meter == 
Nur noch 20 Meter. Es reicht sicher!
Der massige Mann, der es zuschiebt, senkt den Blick. 
-> 10Meter

== 10Meter ==
Das Tor ist schon fast in Griffweite. Es ist nur noch ein Spaltbreit offen. Der Mann schiebt es weiter zu, ohne dich anzuschauen. So ist es vermutlich einfacher, jemanden in den sicheren Tod zu schicken.
* ['Halt'] "Wartet auf mich" schreist du. Oder glaubst du zu schreien. Es ist nur ein Krächzen, das aus deiner zugeschnürten Kehle kommt. -> Tor
* [Hand ausstrecken] Unmöglich, die können dich doch nicht einfach draussen lassen! -> Tor 

== Tor ==
Du streckst deine Hand aus, ergreifst das Tor! Der massige Kerl schaut auf, und du quetschst dich durch die Schmale Spalte hindurch. -> END

== ItEnded ==
//DON'T DELETE THIS KNOT
//Dieser Abschnitt wird abgespielt, sobald der Timer abgelaufen ist. Verändere ihn wie du willst.
Um dich ist alles weiss.
Die Augen schmerzen.
Wo ist Nio?
Und dann wird alles schwarz.


//If you change this line, or add more choices, make sure there is one choice of type + and that it results in the -> END #reload action.
+ [Play Again] -> END #RELOAD
