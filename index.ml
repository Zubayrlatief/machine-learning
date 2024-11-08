import codecademylib3_seaborn
from sklearn.linear_model import Perceptron
import matplotlib.pyplot as plt
import numpy as np
from itertools import product

data = [[0, 0], [0, 1], [1, 0], [1, 1]]
lables = [0,1,1,0]

classifier = Perceptron(max_iter=40,random_state=22)

classifier.fit(data,lables)

x_values = np.linspace(0, 1, 100)
y_values = np.linspace(0, 1, 100)

# Create a grid of points
point_grid = list(product(x_values, y_values))

# Calculate distances from the decision boundary
distances = classifier.decision_function(point_grid)

# Take the absolute value of each distance
abs_distances = [abs(distance) for distance in distances]

# Reshape abs_distances into a 100 by 100 matrix
distances_matrix = np.reshape(abs_distances, (100, 100))



# Draw the heat map
heatmap = plt.pcolormesh(x_values, y_values, distances_matrix)
plt.colorbar(heatmap)
plt.show()


# Reshape abs_distances into a 100 by 100 matrix
distances_matrix = np.reshape(abs_distances, (100, 100))

plt.scatter([point[0] for point in data], [point[1] for point in data], c=lables)
plt.show()