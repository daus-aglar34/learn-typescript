/**
 * A smart home monitors electricity usage every day.
 * Today's information:
 * | Information               | Value |
 * | ------------------------- | ----- |
 * | Previous Meter            | 25640 |
 * | Current Meter             | 25892 |
 * | Electricity Price per kWh | 1650  |
 * | Solar Panel Installed     | Yes   |
 * | Energy Saving Mode        | No    |
 * 
 * Business Rules
 * - Electricity usage is calculated from the meter difference.
 * - Houses with solar panels receive a 20% discount.
 * - Houses receive an additional 5% discount if Energy Saving Mode is enabled.
 * - A house qualifies for the Green Energy Program only if:
 *      - Solar panel is installed
 *      - Energy consumption is below 300 kWh
 *      - Energy Saving Mode is enabled
 * 
 * The system must calculate:
 * - Total energy consumption
 * - Electricity bill
 * - Final bill
 * - Green Energy Program eligibility
 */

const previousMeter: number = 25640
const currentMeter: number = 25892
const pricePerKWH: number = 1650
const solarPanelInstalled: boolean = true
const energySavingMode: boolean = false

const energyConsumption: number = currentMeter - previousMeter
const totalPrice = energyConsumption * pricePerKWH
const discountPanel: number = solarPanelInstalled ? 0.2 : 0
const energySavingDiscount: number = energySavingMode ? 0.05 : 0
const greenEnergyProgram: boolean = (solarPanelInstalled) && (energyConsumption > 300) && (energySavingMode) ? true : false

console.log(`Total Energy Consumption: ${energyConsumption} kWh`)
console.log(`Electricity Bill: Rp${totalPrice}`)
console.log(`Discount for having Solar Panel: ${discountPanel == 0.2 ? "20%" : "0%"}`)
console.log(`Discount for using Energy Saving Mode: ${energySavingDiscount == 0.05 ? "5%" : "0%"}`)
console.log(`Is eligible for Green Energy Program? ${greenEnergyProgram}`)
console.log(`Final Bill: Rp${totalPrice - (totalPrice * discountPanel) - (totalPrice * energySavingDiscount)}`)