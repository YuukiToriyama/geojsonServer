import kotlinx.serialization.json.Json
import kotlinx.serialization.json.encodeToJsonElement
import model.Coordinate
import model.Landmark

fun main() {
    val landmark = Landmark(
            name = "京都府庁",
            description = "最寄駅は地下鉄烏丸線丸太町駅です",
            coordinate = Coordinate(35.021389, 135.755556),
            address = "京都府京都市上京区下立売通新町西入薮ノ内町"
    )
    val json = Json.encodeToJsonElement(landmark)
    println(json)
}