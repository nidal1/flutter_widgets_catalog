import 'package:flutter/material.dart';

class TransformExample extends StatelessWidget {
  const TransformExample({super.key});

  @override
  Widget build(BuildContext context) {
    return Center(
      child: Transform.rotate(
        angle: -0.2,
        child: Container(
          padding: const EdgeInsets.all(8.0),
          color: Colors.blue,
          child: const Text('This is rotated!'),
        ),
      ),
    );
  }
}
