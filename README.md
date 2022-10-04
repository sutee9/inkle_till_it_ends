Summary
=========

*Till It Ends* allows you to create multilinear stories that last exactly ten seconds. Or any other limited that that you want it to last. After ten seconds, the story ends. Players can start the story anew and play it as many times as they want.

Technically, *Till it Ends* is an HTML template for the JavaScript implementation [InkJS](https://github.com/y-lohse/inkjs) of the [Ink](https://www.inklestudios.com/ink/) story scripting language by Inkle Studios.  To learn how to write Ink stories, go and get their fabulous guide as a PDF or in printed format, or simply start with this [basic tutorial] (https://www.inklestudios.com/ink/web-tutorial/).

How to use
==========

Writing the story
----------------

The easiest way to write in inkle story is to use the Inky editor. ([Download Inky](https://github.com/inkle/inky)).

There are only a few rules that must be followed to get started
1. There must be a knot in your story called *ItEnded*
2. Two restart the game, there must by one choice within the *ItEnded* knot that ends with the *reload* tag.

And that's it. Here's the most basic example of using this template. 

        You have ten seconds before the apocalypse happens. Maybe just eight by the time you've finished reading this. There's nothing left to do but wait. So you wait. -> END
        
        == ItEnded ==
        
        The world ended. It took you down with it. You'd wish you had done something else instead of just waiting for the inevitable. If you could still wish. But you can't.
        
        + [Play Again] -> END #reload
        
Here's what happens: The first line of the story will show. And end with it, because there's nothing else yet. Then, when the timer inevitably expires, it plays the ItEnded knot, and the story starts again. 
