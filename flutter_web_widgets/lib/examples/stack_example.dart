import 'package:flutter/material.dart';

class StackExample extends StatelessWidget {
  const StackExample({super.key});

  @override
  Widget build(BuildContext context) {
    return Center(
      child: Stack(
        alignment: Alignment.center,
        children: <Widget>[
          Container(width: 200, height: 200, color: Colors.red),
          Container(width: 150, height: 150, color: Colors.green),
          Container(width: 100, height: 100, color: Colors.blue),
        ],
      ),
    );
  }
}
