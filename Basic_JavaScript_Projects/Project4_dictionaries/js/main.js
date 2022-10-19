function my_Dictionary() {                                  //Creation of a dictionary with Key-Value Pairs (KVPs)
    var Tree = {                                            //Naming the Key (variable to be defined)
        Species: "Cercis canadensis aka Eastern Redbud",    //Defining the Values
        LeafColor: "Green",
        LeafShape: "Heart",
        BarkColor: "Grey",
        FlowerColor: "Pink",
        GrowthRate: "13-24 in/yr",
        FullHeight: "20 feet"
    };
    delete Tree.Species;                                    //Deletion of a Value from the dictionary
    document.getElementById("Dictionary").innerHTML = Tree.Species; //Note: This will display "undefined" because
                                                                    //the value was deleted in previous command
}