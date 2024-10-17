# from flask import Blueprint, request, jsonify
# from flask_sqlalchemy import SQLAlchemy

# # Create a Blueprint for the routes
# routes = Blueprint('routes', __name__)

# # --- AUTHENTICATION ROUTES ---

# # Login route
# @routes.route('/login', methods=['POST'])
# def login():
#     data = request.json
#     username = data.get('username')
#     password = data.get('password')

#     user = User.query.filter_by(username=username).first()

#     if user and user.check_password(password):
#         return jsonify({"message": "User logged in successfully"}), 200
#     else:
#         return jsonify({"error": "Invalid username or password"}), 401

#     # Authentication logic goes here

# # Register route
# @routes.route('/register', methods=['POST'])
# def register():
#     data = request.json
#     username = data.get('username')
#     password = data.get('password')
#     name = data.get('name')
#     email = data.get('email')
#     bio = data.get('bio')
#     skills = data.get('skills')

#     if not username or not password or not name or not email or not skills:
#         return jsonify({"error": "All fields are required"}), 400

#     existing_user = User.query.filter_by(username=username).first()
#     if existing_user:
#         return jsonify({"error": "Username already exists"}), 409

#     new_user = User(username=username, password=password, name=name, email=email, bio=bio, skills=skills)
#     db.session.add(new_user)
#     db.session.commit()

#     return jsonify({"message": "User registered successfully"}), 201

# # Logout route
# @routes.route('/logout', methods=['POST'])
# def logout():
#     user_id = request.json.get('user_id')

#     # Find the user in the database
#     user = User.query.get(user_id)

#     # If the user exists, log them out
#     if user:
#         # Remove the user from any active rooms or sessions
#         for room in user.rooms:
#             room.users.remove(user)

#         # Invalidate the user's session
#         session.pop(user_id, None)

#         # Update the user's status in the database
#         user.status = 'offline'
#         db.session.commit()

#         return jsonify({"message": "User logged out successfully"}), 200
#     else:
#         return jsonify({"error": "User not found"}), 404

# # --- USER MANAGEMENT ROUTES ---

# # Get user details
# @routes.route('/user/<int:user_id>', methods=['GET'])
# def get_user_details(user_id):
#     # Fetch user details by user_id
#     user = User.query.get(user_id)
#     if user:
#         user_details = {"id": user.id, "name": user.name, "email": user.email, "bio": user.bio, "skills": user.skills}
#         return jsonify(user_details), 200
#     else:
#         return jsonify({"error": "User not found"}), 404

# # Update user info
# @routes.route('/user/<int:user_id>', methods=['PUT'])
# def update_user_info(user_id):
#     data = request.json
    
#     user = User.query.get(user_id)
#     if user:
#         user.name = data.get('name')
#         user.email = data.get('email')
#         user.bio = data.get('bio')
#         user.skills = data.get('skills')
#         db.session.commit()
#         return jsonify({"message": "User info updated successfully"}), 200
#     else:
#         return jsonify({"error": "User not found"}), 404
    

# # --- COLLABORATION ROOM/SESSION MANAGEMENT ROUTES ---

# # Create collaboration room
# @routes.route('/collaboration/room', methods=['POST'])
# def create_room():
#     data = request.json

#     new_room = Room(name="New Room")
#     db.session.add(new_room)
#     db.session.commit()
#     return jsonify({"message": "Room created successfully", "room_id": 123}), 200

# # Get info about a specific room
# @routes.route('/collaboration/room/<int:room_id>', methods=['GET'])
# def get_room_info(room_id):
#     # Fetch room details by room_id
#     room = Room.query.get(room_id)
#     if room:
#         room_info = {"room_id": room.id, "name": room.name}
#         return jsonify(room_info), 200
#     else:
#         return jsonify({"error": "Room not found"}), 404

# # Add a user to a room ***ADD LOGIC***
# @routes.route('/collaboration/room/<int:room_id>/add_user', methods=['POST'])
# def add_user_to_room(room_id):
#     data = request.json
#     user_id = data.get('user_id')
#     room = Room.query.get(room_id)

# # Remove a user from a room
# @routes.route('/collaboration/room/<int:room_id>/remove_user', methods=['POST'])
# def remove_user_from_room(room_id):
#     data = request.json
#     user_id = data.get('user_id')

#     room = Room.query.get(room_id)
#     if room:
#         user = User.query.get(user_id)
#         if user in room.users:
#             room.users.remove(user)
#             db.session.commit()
#             return jsonify({"message": f"User {user_id} removed from room {room_id}"}), 200
#         else:
#             return jsonify({"error": "User not found in the room"}), 404
#     else:
#         return jsonify({"error": "Room not found"}), 404

# # --- REAL-TIME COLLABORATION ROUTES ---

# # Send/Receive messages in a room
# @routes.route('/collaboration/room/<int:room_id>/messages', methods=['POST'])
# def send_receive_messages(room_id):
#     data = request.json
#     message = data.get('message')
#     # Logic to send/receive messages in the room
#     message_service = MessageService()
#     message_service.send_message(room_id, message)
#     return jsonify({"message": "Message sent successfully"}), 200

# # Real-time code collaboration
# @routes.route('/collaboration/room/<int:room_id>/code', methods=['POST'])
# def code_collaboration(room_id):
#     data = request.json
#     code_changes = data.get('code_changes')
#     # Logic to handle code collaboration
#     shared_editor.update_code(room_id, code_changes)
#     broadcast_service.send_message_to_room(room_id, "Code changes received")

#     return jsonify({"message": "Code changes received"}), 200

# # Handle the online call ***HELP W/ LOGIC***
# @routes.route('/collaboration/room/<int:room_id>/call', methods=['POST'])
# def handle_call(room_id):
#     data = request.json
#     call_status = data.get('call_status')
#     # Logic to handle the online call

#     return jsonify({"message": "Call status updated"}), 200

# # --- MATCHING / PAIRING ROUTES ---

# # Pair users based on skillsets
# @routes.route('/pairing', methods=['POST'])
# def pair_users():
#     data = request.json
#     skillset = data.get('skillset')
#     # Logic to pair users based on skillsets

# # Define a dictionary to store users and their skillsets
# users_skillsets = {
#     123: {"name": "Alice", "skillset": "Python"},
#     456: {"name": "Bob", "skillset": "JavaScript"},
#     789: {"name": "Charlie", "skillset": "React.js"}
# }

# @routes.route('/pairing', methods=['POST'])
# def pair_users():
#     data = request.json
#     skillset = data.get('skillset')

#     # Find a user with a matching skillset
#     for user_id, user_details in users_skillsets.items():
#         if user_details['skillset'] == skillset:
#             paired_user = {"id": user_id, "name": user_details['name'], "skillset": user_details['skillset']}
#             return jsonify({"message": "Users paired successfully", "paired_user": paired_user}), 200

#     # If no user with a matching skillset is found, return an error message
#     return jsonify({"error": "No user found with the specified skillset"}), 404