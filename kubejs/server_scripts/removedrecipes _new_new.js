ServerEvents.recipes(e => {
    //在这里ban掉一些比较逃课，或者比较偏离群峦原本玩法的配方（比如CCA的铜工具）
    e.remove({id:'mobs_of_mythology:bronze_ingot'})
    e.remove({id:'drinkbeer:recipe_board_package'})
    e.remove({id:'ad_astra:alloying/steel_ingot_from_alloying_iron_ingot_and_coals'})
    e.remove({id:'create:crafting/materials/andesite_alloy'})
    e.remove({id:'createaddition:compact/immersiveengineering/crushing/coke_block'})
    e.remove({id:'create:mixing/andesite_alloy'})
    e.remove({id:'create:mixing/andesite_alloy_from_zinc'})
    e.remove({id:'htm:materials/sawdust'})
    e.remove({id:'tfcoreprocessing:quern/kindle/leaves_sawdust'})
    e.remove({id:'mekanism:enriching/charcoal'})
    e.remove({id:'mekanism:cardboard_box'})
    e.remove({id:'mekanism:nucleosynthesizing/iron'})
  })