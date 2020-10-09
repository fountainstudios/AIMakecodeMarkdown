### @codeStart players set @s makecode 0
### @codeStop players set @s makecode 1

### @flyoutOnly 1
### @hideIteration true 
### @explicitHints 1

# 6. Alert the Team.

## Introduction step @unplugged

![Alert-team](/static/hour-of-code/alert.gif)

# Alert the Team.

## Step 1

Drag the ``||hourOfCode:alert team||`` block inside the ``||hourOfCode:if hazard found||`` block, so that the team can be alerted.

```ghost
hourOfCode.alertTeam()
```

```template
while (hourOfCode.agentLookForHazards()) {
    if (hourOfCode.agentSeeHazard()) {
        
    }
}
```

```package
minecraft-hoc2019=github:microsoft/pxt-minecraft-hoc2019
```