### @codeStart players set @s makecode 0
### @codeStop players set @s makecode 1

```template
// onStart block only
```

### @explicitHints true
### @flyoutOnly 1

# Activity 3 – Professional Tracker.

## Step 1
We now need to code the AI that is going to track the Ocelots. 
You will need to use the **historical** dataset that you compiled in the last activity, 
and **compare** it with **current** data that is coming in from the savannah. 

## Step 2
First use a `||AI: semi-supervised machine learning||` coding block and place a `||Datasets: input datasets||` coding block inside.
After that, place a `||Datasets: compare datasets||` coding block. Set to **historical** dataset and then **current**.

## Step 3
Then place a `||Datasets: analyze pattern data||` coding block. Followed by an `||Output: locate ocelots||` coding block, and `||Output: generate migration routes||`
coding block. Now when you run the code a map of the ocelots locations will appear.

```ghost
Datasets.compare_PR()
Datasets.input_PR()
AI.ml_PR(function(){})
AI.analyze_PR()
Output.locateOcelots_PR()
Output.genRoutes_PR()
```

```package
aicustomblocks=github:fountainstudios/AICustomBlocks
```