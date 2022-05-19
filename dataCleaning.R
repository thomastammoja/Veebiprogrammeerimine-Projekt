# Change working directory
setwd("C:/Users/kovam/Desktop/kool/6. semester/Veebiprogrammeerimine/Projekt_ThomasTammoja")

# Read raw file
data <- read.csv("data.csv")

dataCopy <- data
data <- dataCopy


# Cleaning
# Change name column
data$name <- data$ļ.æname
data <- data[,c(23,2:22)]

# Clean data
data$alcoholic = ifelse(data$alcoholic == "Alcoholic", 1, 0)

data$glassware[which(data$glassware == "Champagne flute")] <- "Šampanjapokaal"
data$glassware[which(data$glassware %in% c("Cocktail glass", "Cocktail Glass"))] <- "Kokteiliklaas"
data$glassware[which(data$glassware %in% c("Highball glass", "Highball Glass", "Collins glass"))] <- "Grogiklaas"
data$glassware[which(data$glassware == "Hurricane glass")] <- "Hurricane kokteiliklaas"
data$glassware[which(data$glassware == "Martini Glass")] <- "Martinipokaal"
data$glassware[which(data$glassware == "Old-fashioned glass")] <- "Viskiklaas"
data$glassware[which(data$glassware == "Pitcher")] <- "Kann"
data$glassware[which(data$glassware == "Pint glass")] <- "Õlleklaas"
data$glassware[which(data$glassware == "White wine glass")] <- "Valge veini klaas"
data$glassware[which(data$glassware == "Irish coffee cup")] <- "Iiri kohvi kruus"

data$mainIngredient = data$ingredient1
#data <- data[-which(data$ingredient1 == "151 proof rum"),]
data$mainIngredient[which(data$mainIngredient %in% c("Absolut Citron", "Absolut Vodka", "Vodka", "Peach Vodka"))] <- "Viin"
data$mainIngredient[which(data$mainIngredient %in% c("151 proof rum", "Dark rum", "Light rum", "Malibu rum", "White Rum", "Rum", "Spiced rum"))] <- "Rumm"
data$mainIngredient[which(data$mainIngredient %in% c("Amaretto", "Cointreau", "Creme de Cacao", "Kahlua", "White Creme de Menthe"))] <- "Liköör"
data$mainIngredient[which(data$mainIngredient %in%
c("Bourbon", "Jack Daniels"))] <- "Viski"


data$mainIngredient[which(data$mainIngredient == "Apple juice")] <- "Õunamahl"
data$mainIngredient[which(data$mainIngredient == "Bailey's irish cream")] <- "Õunamahl"


table(data$mainIngredient)



data[,1]
