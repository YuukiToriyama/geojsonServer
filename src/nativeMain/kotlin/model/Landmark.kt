package model

import kotlinx.serialization.Serializable

@Serializable
data class Landmark(
        val name: String,
        val description: String?,
        val coordinate: Coordinate?,
        val address: String
)
