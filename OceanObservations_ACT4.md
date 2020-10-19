### @codeStart players set @s makecode 0
### @codeStop players set @s makecode 1

```template
//
```

### @explicitHints true
### @flyoutOnly 0
### @hideIteration false 

# Activity 3 – Testing it out.

## Step 1
We need to see if the **autonomous navigation** that we wrote for the Agent works. To do that, use a `||AI:autonomous navigation algorithm||`
coding block. Inside of that, specify (using the coding blocks in the `||Output: OUTPUT||` tab) which sensors the Agent should reach.
The sensors should be sensors **2** and **4**. 

## Step 2
Then place a `||Datasets: transfer data||` coding block to tranfer all of the nessesary data back to the ship.
If done correctly, when the code is run, the Agent should make its' 
way to the two sensors. You can put on a virtual headset using the button, this is programmed with the same data that we collected. By doing this you will
be able to see where the Agent is going a lot easier. 

```ghost
AI.ml_OO2(function(){})
Output.reach1_OO()
Output.reach2_OO()
Output.reach3_OO()
Output.reach4_OO()
```

```package
aicustomblocks=github:fountainstudios/AICustomBlocks
```
