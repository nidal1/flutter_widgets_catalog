import 'package:flutter/material.dart';

class PaddingExample extends StatelessWidget {
  const PaddingExample({super.key});

  @override
  Widget build(BuildContext context) {
    return Center(
      child: Container(
        color: Colors.blue,
        child: const Padding(
          padding: EdgeInsets.all(32.0),
          child: Text('Padded Text', style: TextStyle(color: Colors.white)),
        ),
      ),
    );
  }
}
